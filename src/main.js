import './style.css'
import * as THREE from "three";
import { Sky } from "three/examples/jsm/objects/Sky";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Pane } from "tweakpane";
import RAPIER from  "@dimforge/rapier3d";

class BasicCharacterController {
    constructor(scene) {
        this._scene = scene;
        this._init();
    }

    _init() {
        this._decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
        this._acceleration = new THREE.Vector3(1, 0.25, 50.0);
        this._velocity = new THREE.Vector3(0.0, 0.0, 0.0);

        this._animations = {};

        this._input = new BasicCharacterControllerInput();
        this._fsm = new CharacterFSM(this);

        this._loadModels();
    }

    _loadModels() {
        const loader = new FBXLoader();
        loader.setPath("/character/");
        loader.load("tpose.fbx", (fbx) => {
            fbx.scale.setScalar(0.1);
            fbx.traverse(c => {
                c.castShadow = true;
            });
            this._target = fbx;
            this._scene.add(this._target);
            this._mixer = new THREE.AnimationMixer(this._target);

            this._manager = new THREE.LoadingManager();
            this._manager.onLoad = () => {
                this._fsm.setState('idle');
            }

            const _onLoad = (animName, anim) => {
                console.log(anim);
                const clip = anim.animations[0];
                const action = this._mixer.clipAction(clip);

                this._animations[animName] = {
                    clip: clip,
                    action: action
                };
            };

            const animLoader = new FBXLoader(this._manager);
            animLoader.setPath("/character/");
            animLoader.load("walk.fbx", (a) => { _onLoad("walk", a) });
            animLoader.load("run.fbx", (a) => { _onLoad("run", a) });
            animLoader.load("jump.fbx", (a) => { _onLoad("jump", a) });
            animLoader.load("idle.fbx", (a) => {_onLoad("idle", a) });
        });
    }

    update(timeElapsed) {
        if (!this._target) {
            return;
        }

        this._fsm.update(timeElapsed, this._input);

        const velocity = this._velocity;
        const frameDecceleration = new THREE.Vector3(
            velocity.x * this._decceleration,
            velocity.y * this._decceleration,
            velocity.z * this._decceleration
        );
        frameDecceleration.multiplyScalar(timeElapsed);
        frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(Math.abs(frameDecceleration.z), Math.abs(velocity.z));
        velocity.add(frameDecceleration);

        const controlObject = this._target;
        const _Q = new THREE.Quaternion();
        const _A = new THREE.Vector3();
        const _R = controlObject.quaternion.clone();

        if (this._input._keys.forward) {
            velocity.z += this._acceleration.z * timeElapsed;
        }

        if (this._input._keys.backward) {
            velocity.z -= this._acceleration.z * timeElapsed;
        }
    }
}

class BasicCharacterControllerInput {
    constructor() {
        this._init();
    }

    _init() {
        this._keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            space: false,
            shift: false,
        };
        document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
        document.addEventListener('keyup', (e) => this._onKeyUp(e), false);
    }

    _onKeyDown(event) {
        switch (event.keyCode) {
            case 87:
                this._keys.forward = true;
                break;
            case 65:
                this._keys.left = true;
                break;
            case 83:
                this._keys.backward = true;
                break;
            case 68:
                this._keys.right = true;
                break;
            case 32:
                this._keys.space = true;
                break;
            case 16:
                this._keys.shift = true;
                break;
        }
    }

    _onKeyUp(event) {
        switch (event.keyCode) {
            case 87:
                this._keys.forward = false;
                break;
            case 65:
                this._keys.left = false;
                break;
            case 83:
                this._keys.backward = false;
                break;
            case 68:
                this._keys.right = false;
                break;
            case 32:
                this._keys.space = false;
                break;
            case 16:
                this._keys.shift = false;
                break;
        }
    }
}

class FiniteStateMachine {
    constructor() {
        this._states = {};
        this._currentState = null;
    }

    _addState(name, type) {
        this._states[name] = type;
    }

    setState(name) {
        const prevState = this._currentState;

        if (prevState) {
            if (prevState.name == name) {
                return;
            }
            prevState.exit();
        }

        const state = new this._states[name](this);

        this._currentState = state;
        state.enter(prevState);
    }

    update(timeElapsed, input) {
        if (this._currentState) {
            this._currentState.update(timeElapsed, input);
        }
    }
}

class CharacterFSM extends FiniteStateMachine {
    constructor(characterController) {
        super();
        this._characterController = characterController;
        this._init();
    }

    _init() {
        this._addState("idle", IdleState);
        this._addState("walk", WalkState);
        this._addState("run", RunState);
        this._addState("jump", JumpState);
    }
}

class State {
    constructor(parent) {
        this._parent = parent;
    }

    enter(prevState) {};
    update(timeElapsed, input) {};
    exit() {};
}

class IdleState extends State {
    constructor(parent) {
        super(parent);
    }

    get name() {
        return "idle";
    }

    enter(prevState)  {
        const idleAction = this._parent._characterController._animations["idle"].action;

        if (prevState) {
            const prevAction = this._parent._characterController._animations[prevState.name].action;
            idleAction.time = 0.0;
            idleAction.enabled = true;
            idleAction.setEffectiveTimeScale(1.0);
            idleAction.setEffectiveWeight(1.0);
            idleAction.crossFadeFrom(prevAction, 0.5, true);
        }
        idleAction.play();
    }

    exit() {

    }

    update(_, input) {
        if (input._keys.forward || input._keys.backward) {
            this._parent.setState("walk");
        } else if (input._keys.space) {
            this._parent.setState("jump");
        }
    }
}

class JumpState extends State {
    constructor(parent) {
        super(parent);

        this._finishedCallback = () => {
            this.finished();
        }
    }

    get name() {
        return "jump";
    }

    enter(prevState) {
        const curAction = this._parent._characterController._animations["jump"].action;
        const mixer = curAction.getMixer();
        mixer.addEventListener("finished", this._finishedCallback);

        if (prevState) {
            const prevAction = this._parent._characterController._animations[prevState.name].action;

            curAction.reset();
            curAction.setLoop(THREE.LoopOnce, 1);
            curAction.clampWhenFinished = true;
            curAction.crossFadeFrom(prevAction, 0.5, true);
        }
        curAction.play();
    }

    finished() {
        this._cleanup();
        this._parent.setState("idle");
    }

    _cleanup() {
        const action = this._parent._characterController._animations["jump"].action;
        action.getMixer().removeEventListener("finished", this._finishedCallback);
    }

    exit() {
        this._cleanup();
    }

    update(_) {

    }
}

class WalkState extends State {
    constructor(parent) {
        super(parent);
    }

    get name() {
        return "walk";
    }

    enter(prevState) {
        const curAction = this._parent._characterController._animations["walk"].action;
        if (prevState) {
            const prevAction = this._parent._characterController._animations[prevState.name].action;
            curAction.enabled = true;

            if (prevState.name == "run") {
                const ratio = curAction.getClip().duration / prevAction.getClip().duration;
                curAction.time = prevAction.time * ratio;
            } else {
                curAction.time = 0.0;
                curAction.setEffectiveTimeScale(1.0);
                curAction.setEffectiveWeight(1.0);
            }

            curAction.crossFadeFrom(prevAction, 0.5, true);
        }
        curAction.play();
    }

    exit() {}

    update(timeElapsed, input) {
        if (input._keys.forward || input._keys.backward) {
            if (input._keys.shift) {
                this._parent.setState("run");
            }

            return;
        }

        this._parent.setState("idle");
    }
}

class RunState extends State {
    constructor(parent) {
        super(parent);
    }

    get name() {
        return "run";
    }

    enter(prevState) {
        const curAction = this._parent._characterController._animations["run"].action;
        if (prevState) {
            const prevAction = this._parent._characterController._animations[prevState.name].action;
            curAction.enabled = true;

            if (prevState.name == "walk") {
                const ratio = curAction.getClip().duration / prevAction.getClip().duration;
                curAction.time = prevAction.time * ratio;
            } else {
                curAction.time = 0.0;
                curAction.setEffectiveTimeScale(1.0);
                curAction.setEffectiveWeight(1.0);
            }

            curAction.crossFadeFrom(prevAction, 0.5, true);
        }
        curAction.play();
    }

    exit() {}

    update(timeElapsed, input) {
        if (input._keys.forward || input._keys.backward) {
            if (!input._keys.shift) {
                this._parent.setState("walk");
            }

            return;
        }

        this._parent.setState("idle");
    }
}

class World {
    constructor() {
        this._Initialize();
    }

    _Initialize() {
        this._clock = new THREE.Clock();
        this._prevTime = this._clock.getElapsedTime();

        this._renderer = new THREE.WebGLRenderer({antialias: true});
        this._renderer.shadowMap.enabled = true;
        this._renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this._renderer.setPixelRatio(window.devicePixelRatio);
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        this._renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this._renderer.toneMappingExposure = 0.2;

        document.body.appendChild(this._renderer.domElement);

        window.addEventListener("resize", () => {
            this._onWindowResize();
        }, false);

        const fov = 60;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 1.0;
        const far = 1000.0;
        this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this._camera.position.set(5, 5, 5);

        this._scene = new THREE.Scene();
        
        this._orbitControls = new OrbitControls(this._camera, this._renderer.domElement);
        this._orbitControls.enableDamping = true;
        this._orbitControls.update();

        this._characterController = new BasicCharacterController(this._scene);

        /*const sky = new Sky();
        sky.scale.setScalar(450000);

        const phi = THREE.MathUtils.degToRad(90 - 70);
        const theta = THREE.MathUtils.degToRad(180);
        const sunPosition = new THREE.Vector3().setFromSphericalCoords(1, phi, theta);
        sky.material.uniforms.sunPosition.value = sunPosition;

        sky.material.uniforms["turbidity"].value = 10;
        sky.material.uniforms["rayleigh"].value = 3;
        sky.material.uniforms["mieCoefficient"].value = 0.005;
        sky.material.uniforms["mieDirectionalG"].value = 0.7;

        this._scene.add(sky);*/

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(20, 100, 10);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.bias = -0.001;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500;
        light.shadow.camera.left = 200;
        light.shadow.camera.right = -200;
        light.shadow.camera.top = 200;
        light.shadow.camera.bottom = -200;
        this._scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040);
        this._scene.add(ambientLight);

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(500, 500, 1, 1),
            new THREE.MeshStandardMaterial({color: 0xffffff})
        );
        plane.castShadow = false;
        plane.receiveShadow = true;
        plane.rotation.x = -Math.PI / 2;
        this._scene.add(plane);

        /*const box = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({color: 0xf40000}),
        );
        box.castShadow = true;
        box.receiveShadow = false;
        box.position.set(0, 0.5, 0);
        this._scene.add(box);*/

        this._RAF();
    }

    _loadModel() {
        const loader = new GLTFLoader();
        loader.load();
    }

    _onWindowResize() {
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(window.innerWidth, window.innerHeight);
    }

    _RAF() {
        window.requestAnimationFrame(() => {
            const currentTime = this._clock.getElapsedTime();
            const deltaTime = currentTime - this._prevTime;
            this._prevTime = currentTime;
            this._characterController.update(deltaTime * 0.001);
            this._renderer.render(this._scene, this._camera);
            this._orbitControls.update(); 
            this._RAF();
        });
    }
}

new World();


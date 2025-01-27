import './style.css'
import * as THREE from "three";
import { Sky } from "three/examples/jsm/objects/Sky";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Pane } from "tweakpane";
import RAPIER from  "@dimforge/rapier3d";

const panel = new Pane({title: "Debug"});

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor(0x222222);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.2;

document.body.appendChild(renderer.domElement);

const cameraOffset = {
    x: 3,
    y: 14,
    z: 9
};

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 1.0, 1000.0);
/*panel.addBinding(cameraOffset, "x");
panel.addBinding(cameraOffset, "y");
panel.addBinding(cameraOffset, "z");*/
camera.position.copy(cameraOffset);
/*panel.addBinding(camera.rotation, "x");
panel.addBinding(camera.rotation, "y");
panel.addBinding(camera.rotation, "z");*/
camera.rotation.x = -1;
scene.add(camera);

/*const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();*/

const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);
scene.add(ambientLight);

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100, 1, 1),
    new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide}),
);
plane.castShadow = false;
plane.receiveShadow = true;
plane.rotation.x = Math.PI / 2;
scene.add(plane);


var characterState = {
    walk: false,
    run: false,
    idle: false,
    jump: false,
};

var character = null;
var mixer = null;
var animations = {};
const loader = new FBXLoader();
loader.setPath("/character/");
loader.load("tpose.fbx", (fbx) => {
    fbx.scale.setScalar(0.01);
    fbx.traverse(c => {
        c.castShadow = true;
    });
    character = fbx;
    scene.add(fbx);
    
    //camera.lookAt(character.position);

    mixer = new THREE.AnimationMixer(character);

    const loadAnimationClip = (animName, anim) => {
        const clip = anim.animations[0];
        const action = mixer.clipAction(clip);

        animations[animName] = { clip: clip, action: action };
    }

    const loadingManager = new THREE.LoadingManager();
    const animationLoader = new FBXLoader(loadingManager);
    animationLoader.setPath("/character/");
    animationLoader.load("idle.fbx", (a) => loadAnimationClip("idle", a));
    animationLoader.load("walk.fbx", (a) => loadAnimationClip("walk", a));
    animationLoader.load("run.fbx", (a) => loadAnimationClip("run", a));
    animationLoader.load("jump.fbx", (a) => loadAnimationClip("jump", a));

    loadingManager.onLoad = () => {
        characterState["idle"] = true;
        animations["idle"].action.play();

        document.addEventListener("keydown", (e) => {
            switch(e.code) {
                case "KeyW":
                    if (characterState["idle"]) {
                        const walkAction = animations["walk"].action;
                        const prevAction = animations["idle"].action;

                        walkAction.enabled = true;
                        walkAction.time = 0.0;
                        walkAction.setEffectiveTimeScale(1.0);
                        walkAction.setEffectiveWeight(1.0);
                        walkAction.crossFadeFrom(prevAction, 0.5, true);
                        walkAction.play();
                        console.log("AA");
                        characterState["idle"] = false;
                        characterState["walk"] = true;
                    }
                    break;
                case "ShiftLeft":
                    if (characterState["walk"]) {
                        const runAction = animations["run"].action;
                        const prevAction = animations["walk"].action;

                        runAction.enabled = true;
                        runAction.time = prevAction.time * (runAction.getClip().duration / prevAction.getClip().duration);
                        runAction.crossFadeFrom(prevAction, 0.5, true);
                        runAction.play();

                        characterState["walk"] = false;
                        characterState["run"] = true;
                    }
                    break;
            }
        });

        document.addEventListener("keyup", (e) => {
            switch(e.code) {
                case "KeyW":
                    const idleAction = animations["idle"].action;
                    const prevAction = characterState["run"] ?  animations["run"].action : animations["walk"].action;

                    idleAction.time = 0.0;
                    idleAction.enabled = true;
                    idleAction.setEffectiveTimeScale(1.0);
                    idleAction.setEffectiveWeight(1.0);
                    idleAction.crossFadeFrom(prevAction, 0.5, true);
                    idleAction.play();

                    characterState["walk"] = false;
                    characterState["run"] = false;
                    characterState["idle"] = true;
                    break;
                case "ShiftLeft":
                    if (characterState["run"]) {
                        const walkAction = animations["walk"].action;
                        const prevAction = animations["run"].action;

                        walkAction.enabled = true;
                        walkAction.time = prevAction.time * (walkAction.getClip().duration / prevAction.getClip().duration);
                        walkAction.crossFadeFrom(prevAction, 0.5, true);
                        walkAction.play();

                        characterState["walk"] = true;
                        characterState["run"] = false;
                    }
                    break;
            }
        });
    }
});

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}, false);

const clock = new THREE.Clock();
let prevTime = clock.getElapsedTime();

const acceleration = new THREE.Vector3(0, 0, 5.0);
const decceleration = new THREE.Vector3(0, 0, 50);
let velocity = new THREE.Vector3(0.0, 0.0, 0.0);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

document.addEventListener("pointermove", (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

function tick() {
    const currentTime = clock.getElapsedTime();
    const deltaTime = currentTime - prevTime;
    prevTime = currentTime;

    if (character) {
        raycaster.setFromCamera(pointer, camera);
        const intersections = raycaster.intersectObject(plane);
        if (intersections.length) {
            character.lookAt(intersections[0].point);
            character.quaternion.x = 0;
            character.quaternion.z = 0;
        }
    }
    
    if (mixer) {
        if (characterState["walk"]) {
            velocity.z += velocity.z < 3 ? acceleration.z * deltaTime : 0;
            character.position.add(velocity.clone().applyEuler(character.rotation).multiplyScalar(deltaTime));
        } else if (characterState["run"]) {
            velocity.z += velocity.z < 5 ? acceleration.z * deltaTime : 0;
            character.position.add(velocity.clone().applyEuler(character.rotation).multiplyScalar(deltaTime));
        }

        camera.position.x = character.position.x + cameraOffset.x;
        camera.position.y = cameraOffset.y;
        camera.position.z = character.position.z + cameraOffset.z;

        mixer.update(deltaTime);
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();

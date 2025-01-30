import './style.css'
import * as THREE from "three";
import { Sky } from "three/examples/jsm/objects/Sky";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Pane } from "tweakpane";
import RAPIER from  "@dimforge/rapier3d";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";
import testVertexShader from "./shaders/test/vertex.glsl";
import testFragmentShader from "./shaders/test/fragment.glsl";

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
const camera = new THREE.PerspectiveCamera(75, aspect, 1.0, 100.0);
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

const ground = new THREE.Group();
const groundPlanes = new THREE.Group();

function createGrassTile(tile_size, blade_width, blade_height, blade_count, ground_material, blade_material) {
    const blade_tile_size = tile_size / blade_count;
    const tile = new THREE.Mesh(
        new THREE.PlaneGeometry(tile_size, tile_size, 1, 1),
        ground_material
    );
    tile.rotation.x = -Math.PI / 2;
    tile.castShadow = false;
    tile.receiveShadow = true;


    const bladeGeometry = new THREE.PlaneGeometry(blade_width, blade_height, 2, 1);
    const bladeMesh = new THREE.InstancedMesh(bladeGeometry, blade_material, blade_count * blade_count);

    const dummy = new THREE.Object3D();
    let n = 0;
    for (let r = 0; r < blade_count; r++) {
        for (let c = 0; c < blade_count; c++) {
            dummy.lookAt(camera.position);
            dummy.position.x = blade_tile_size*c + (blade_tile_size/2) - tile_size/2;
            dummy.position.x += (Math.random() - 0.5) * 1.3 * (blade_tile_size/2);
            dummy.position.z = blade_tile_size*r + (blade_tile_size/2) - tile_size/2;
            dummy.position.z += (Math.random() - 0.5) * 1.3 * (blade_tile_size/2);
            dummy.position.y = blade_height/2;
            dummy.rotation.y += Math.random();
            dummy.rotation.x = dummy.rotation.x * 0.3;
            dummy.rotation.z = dummy.rotation.z * 0.3;
            dummy.updateMatrix();
            bladeMesh.setMatrixAt(n, dummy.matrix);
            n++;
        }
    }
    bladeMesh.instanceMatrix.needsUpdate = true;

    return {ground: tile, grass: bladeMesh};
};

/*const FLOOR_TILE_SIZE = 20;

const tile = new THREE.Mesh(
    new THREE.PlaneGeometry(FLOOR_TILE_SIZE, FLOOR_TILE_SIZE, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0x724254 }),
);
tile.rotation.x = -Math.PI / 2;
tile.castShadow = false;
tile.receiveShadow = true;
groundPlanes.add(tile);

const BLADE_WIDTH = 0.4;
const BLADE_HEIGHT = 1.5;
const BLADE_COUNT = 100;
const BLADE_TILE_SIZE = FLOOR_TILE_SIZE / BLADE_COUNT;

const bladeGeometry = new THREE.PlaneGeometry(BLADE_WIDTH, BLADE_HEIGHT, 2, 1);*/
/*const bladeGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -BLADE_WIDTH, 0.0, 0.0,
    BLADE_WIDTH, 0.0, 0.0,
    0.0, BLADE_HEIGHT, 0.0,
]);
bladeGeometryc.setAttribute("position", new THREE.BufferAttribute(vertices, 3));*/
/*const bladeMaterial = new THREE.ShaderMaterial({
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
    side: THREE.DoubleSide,
    uniforms: { uTime: { type: "float", value: 0.0 } },
    transparent: true,
    //wireframe: true,
});
//const bladeMaterial = new THREE.MeshBasicMaterial();
const bladeMesh = new THREE.InstancedMesh(bladeGeometry, bladeMaterial, BLADE_COUNT * BLADE_COUNT);

const dummy = new THREE.Object3D();
let n = 0;
for (let r = 0; r < BLADE_COUNT; r++) {
    for (let c = 0; c < BLADE_COUNT; c++) {
        dummy.lookAt(camera.position);
        dummy.position.x = BLADE_TILE_SIZE*c + (BLADE_TILE_SIZE/2) - FLOOR_TILE_SIZE/2;
        dummy.position.x += (Math.random() - 0.5) * 1.3 * (BLADE_TILE_SIZE/2);
        dummy.position.z = BLADE_TILE_SIZE*r + (BLADE_TILE_SIZE/2) - FLOOR_TILE_SIZE/2;
        dummy.position.z += (Math.random() - 0.5) * 1.3 * (BLADE_TILE_SIZE/2);
        dummy.position.y = BLADE_HEIGHT/2;
        dummy.rotation.y += Math.random();
        dummy.rotation.x = dummy.rotation.x * 0.3;
        dummy.rotation.z = dummy.rotation.z * 0.3;
        dummy.updateMatrix();
        bladeMesh.setMatrixAt(n, dummy.matrix);
        n++;
    }
}
bladeMesh.instanceMatrix.needsUpdate = true;
//scene.add(bladeMesh);
ground.add(bladeMesh);
ground.add(groundPlanes);
console.log(bladeMesh);*/

const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x724254 });
const bladeMaterial = new THREE.ShaderMaterial({
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
    side: THREE.DoubleSide,
    uniforms: { uTime: { type: "float", value: 0.0 } },
    transparent: true,
});

const tile = createGrassTile(20, 0.4, 1.5, 100, planeMaterial, bladeMaterial);
groundPlanes.add(tile.ground);
ground.add(tile.grass);

/*const pos = [[-20, -20], [0, -20], [20, -20]];
for (let i = 0; i < pos.length; i++) {
    const tile = createGrassTile(20, 0.4, 1.5, 500, planeMaterial, bladeMaterial);
    tile.ground.position.x = pos[i][0];
    tile.ground.position.z = pos[i][1];
    tile.grass.position.x = tile.ground.position.x;
    tile.grass.position.z = tile.ground.position.z;
    groundPlanes.add(tile.ground);
    ground.add(tile.grass);
}*/

ground.add(groundPlanes);
/*const mainTileSize = 5;
const mainTiles = [[-2.5, -2.5], [2.5, -2.5], [-2.5, 2.5], [2.5, 2.5]];
for (let i = 0; i < mainTiles.length; i++) {
    const mainTile = new THREE.Mesh(
        new THREE.PlaneGeometry(mainTileSize, mainTileSize, 1, 1),
        new THREE.MeshBasicMaterial({color: 0x444444, wireframe: true}),
    );
    mainTile.rotation.x = -Math.PI / 2;
    mainTile.position.x = mainTiles[i][0];
    mainTile.position.z = mainTiles[i][1];
    mainTile.castShadow = false;
    mainTile.receiveShadow = true;
    ground.add(mainTile);
}

const secondaryTileSize = 10;
const secondaryTiles = [[-10, -10], [0, -10], [10, -10],
                        [-10, 0],             [10, 0],
                        [-10, 10], [0, 10], [10, 10]];
for (let i = 0; i < secondaryTiles.length; i++) {
    const secondaryTile = new THREE.Mesh(
        new THREE.PlaneGeometry(secondaryTileSize, secondaryTileSize, 1, 1),
        new THREE.MeshBasicMaterial({color: 0x444444, wireframe: true}),
    );
    secondaryTile.rotation.x = -Math.PI / 2;
    secondaryTile.position.x = secondaryTiles[i][0];
    secondaryTile.position.z = secondaryTiles[i][1];
    secondaryTile.castShadow = false;
    secondaryTile.receiveShadow = true;
    ground.add(secondaryTile);
}

const tertiaryTileSize = 20;
const tertiaryTiles = [[-10, -10], [0, -10], [10, -10],
                        [-10, 0],             [10, 0],
                        [-10, 10], [0, 10], [10, 10]];
for (let i = 0; i < tertiaryTiles.length; i++) {
    const tertiaryTile = new THREE.Mesh(
        new THREE.PlaneGeometry(tertiaryTileSize, secondaryTileSize, 1, 1),
        new THREE.MeshBasicMaterial({color: 0x444444, wireframe: true}),
    );
    tertiaryTile.rotation.x = -Math.PI / 2;
    tertiaryTile.position.x = secondaryTiles[i][0];
    tertiaryTile.position.z = secondaryTiles[i][1];
    tertiaryTile.castShadow = false;
    tertiaryTile.receiveShadow = true;
    ground.add(tertiaryTile);
}*/

scene.add(ground);


for (let i = 0; i < 10; i++) {
    const box = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({color: 0xff0000}),
    );
    box.position.x = (Math.random() - 0.5) * 30;
    box.position.z = (Math.random() - 0.5) * 30;
    box.position.y += 0.5;
    scene.add(box);
}

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

    bladeMaterial.uniforms.uTime.value = currentTime;

    //controls.update();

    if (character) {
        raycaster.setFromCamera(pointer, camera);
        const intersections = raycaster.intersectObjects(groundPlanes.children);
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

        groundPlanes.position.x = character.position.x;
        groundPlanes.position.z = character.position.z;
 
        mixer.update(deltaTime);
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();

import './style.css'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import gsap from "gsap";
import { Pane } from "tweakpane";


const pane = new Pane({ title: "Debug" });

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);

const matcapTexture = textureLoader.load("/textures/matcaps/8.png");

//const material = new THREE.MeshNormalMaterial();
//material.wireframe = true;
const material = new THREE.MeshMatcapMaterial({matcap: matcapTexture});

const fontLoader = new FontLoader();
fontLoader.load(
    "/fonts/helvetiker_regular.typeface.json",
    (font) => {
        console.log('font loaded');
        const textGeometry = new TextGeometry("Hello Donuts", { 
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 4
        });
        
        textGeometry.center();

        textGeometry.computeBoundingBox();
        console.log(textGeometry.boundingBox);
        const text = new THREE.Mesh(textGeometry, material);
        scene.add(text);

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);

        console.time("donuts");
        for (let i = 0; i < 300; i++) {
            const donut = new THREE.Mesh(
                donutGeometry,
                material
            );
            donut.position.x = (Math.random() - 0.5) * 10;
            donut.position.y = (Math.random() - 0.5) * 10;
            donut.position.z = (Math.random() - 0.5) * 10;

            donut.rotation.x = Math.random() * Math.PI;
            donut.rotation.z = Math.random() * Math.PI;

            const scale = Math.random();
            donut.scale.set(scale, scale, scale);;

            scene.add(donut);
        }
        console.timeEnd("donuts");
    }
);

const scene = new THREE.Scene();

const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial());

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

const canvas = document.getElementById("canvas");
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

const clock = new THREE.Clock();

const tick = () => {    
    const elapsedTime = clock.getElapsedTime();

    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}

tick();

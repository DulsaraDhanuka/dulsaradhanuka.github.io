import * as THREE from "three";
import { MeshSurfaceSampler }  from "three/examples/jsm/math/MeshSurfaceSampler";
import grassVertexShader from "./shaders/grass/vertex.glsl";
import grassFragmentShader from "./shaders/grass/fragment.glsl";
import * as d3 from "d3";
import earcut from "earcut";

export default class GameMap {
    constructor(scene) {
        this.scene = scene;
    }

    update() {
         
    }

    buildTerrain() {
        const ground = new THREE.Group();

        const x = 30;
        /*const pos = [[-x, -x], [-x, 0], [-x, x],
                     [0, -x], [0, 0], [0, x],
                     [x, -x], [x, 0], [x, x],];
        for (let i = 0; i < pos.length; i++) {
            const plane = new THREE.Mesh(
                new THREE.PlaneGeometry(x, x, 1, 1),
                new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
            );
            plane.position.x = pos[i][0];
            plane.position.z = pos[i][1];
            plane.rotation.x = -Math.PI / 2;
            ground.add(plane);
        }*/
        const planeGeometry = new THREE.PlaneGeometry(x, x, 10, 10);

        const plane = new THREE.Mesh(
            planeGeometry,
            new THREE.MeshBasicMaterial({color: 0x724254, wireframe: false}),
        );
        plane.rotation.x = -Math.PI / 2;
        ground.add(plane);

        /*const points = [[0, 0], [0, 30], [30, 30], [30, 0], [5, 5], [10, 5]];
        const delaunay = Delaunator.from(points);
        this._forEachVoronoiCell(points, delaunay, (p, vertices) => {
            console.log("-----------");
            console.log(p);
            console.log(vertices);
            console.log("-----------");
            for (let i = 0; i < vertices.length; i++) {
                const marker = new THREE.Mesh(
                    new THREE.BoxGeometry(0.5, 0.5, 0.5),
                    new THREE.MeshBasicMaterial({color: 0x000000}),
                );
                marker.position.x = 15- vertices[i][0];
                marker.position.z = 15-vertices[i][1];
                marker.position.y = 0.25;
                this.scene.add(marker);
            }
        });*/
        const points = [];
        points.push([(Math.random()-0.5)*2*15, (Math.random()-0.5)*2*15]);
        points.push([(Math.random()-0.5)*2*15, (Math.random()-0.5)*2*15]);
        points.push([(Math.random()-0.5)*2*15, (Math.random()-0.5)*2*15]);
        points.push([(Math.random()-0.5)*2*15, (Math.random()-0.5)*2*15]);
        points.push([(Math.random()-0.5)*2*15, (Math.random()-0.5)*2*15]);
        const delaunay = d3.Delaunay.from(points);
        const voronoi = delaunay.voronoi([-15, -15, 15, 15]);
        
        for (const polygon of voronoi.cellPolygons()) {
            const polygonVertices = polygon.slice(0, polygon.length-1).flatMap((x) => x);
            const trianglePoints = earcut(polygonVertices);
            const points = [];
            for (let i = 0; i < trianglePoints.length; i += 3) {
                const p1 =  polygon[trianglePoints[i]];
                points.push(p1[0], p1[1], 0);
                const p2 =  polygon[trianglePoints[i+1]];
                points.push(p2[0], p2[1], 0);
                const p3 =  polygon[trianglePoints[i+2]];
                points.push(p3[0], p3[1], 0);
            }
            const planeGeometry = new THREE.BufferGeometry();
            planeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3))
            planeGeometry.computeVertexNormals();
            const plane = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false}));
            plane.rotation.x = -Math.PI/2;
            //this.scene.add(plane);

            const height = Math.max(0.5, Math.random() * 1.5);
            const sampleGeometry = new THREE.PlaneGeometry(0.05, height, 1, 1);
            //const sampleMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
            const sampleMaterial = new THREE.ShaderMaterial({
                vertexShader: grassVertexShader,
                fragmentShader: grassFragmentShader,
                side: THREE.DoubleSide,
            });

            const sampler = new MeshSurfaceSampler(plane).setWeightAttribute("color").build();
            const mesh = new THREE.InstancedMesh(sampleGeometry, sampleMaterial, 5000);
            const position = new THREE.Vector3();
            const matrix = new THREE.Matrix4();
            for (let i = 0; i < mesh.count; i++) {
                sampler.sample(position);
                position.z += height/2;
                position.applyAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI/2);
                matrix.makeTranslation(position.x, position.y, position.z);
                mesh.setMatrixAt(i, matrix);
            }

            this.scene.add(mesh);
        }

        /*const marker = new THREE.Mesh(
            new THREE.BoxGeometry(0.2, 0.2, 0.2),
            new THREE.MeshBasicMaterial({color: 0x000000}),
        );
        marker.position.x = -10;
        marker.position.z = -10;
        marker.position.y = 0.1;  
        this.scene.add(marker);*/



        return ground;
    }

}


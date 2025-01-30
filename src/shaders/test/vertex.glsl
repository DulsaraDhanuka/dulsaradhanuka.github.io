uniform float uTime;
varying vec2 vUv;

void main() {
    vec3 x = vec3(position);
    x.x += sin(uv.y * 1.3 *  uTime) * 0.7;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(x, 1.0);

    vUv = uv;
}

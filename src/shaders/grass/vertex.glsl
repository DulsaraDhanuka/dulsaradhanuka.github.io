varying vec2 vUv;

void main() {
    vec3 x = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(x, 1.0);
    vUv = uv;
}

varying vec2 vUv;

void main() { 
    vec3 tipColor = vec3(0.66, 0.94, 0.37);
    vec3 baseColor = vec3(0.37, 0.67, 0.40);
    vec3 groundColor = vec3(0.44, 0.25, 0.37);
    float x = 0.5;
    float y = 1.4;

    vec3 c1 = vec3(0.0);
    c1.r = baseColor.r+(tipColor.r-baseColor.r)*clamp(vUv.y*x, 0.0, 1.0);
    c1.g = baseColor.g+(tipColor.g-baseColor.g)*clamp(vUv.y*x, 0.0, 1.0);
    c1.b = baseColor.b+(tipColor.b-baseColor.b)*clamp(vUv.y*x, 0.0, 1.0);
    
    vec3 c2 = vec3(0.0);
    c2.r = groundColor.r+(c1.r-groundColor.r)*clamp(vUv.y*y, 0.0, 1.0);
    c2.g = groundColor.g+(c1.g-groundColor.g)*clamp(vUv.y*y, 0.0, 1.0);
    c2.b = groundColor.b+(c1.b-groundColor.b)*clamp(vUv.y*y, 0.0, 1.0);
    gl_FragColor = vec4(c2, 1.0);
}

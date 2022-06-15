/* Need to convert to the new threejs postprocessing module... */

var GlowShader = {
    uniforms: {
        time: {type: 'f', value: 0.0},
        i: {type: 'f', value: 0.1},
        tex: {type: 't', value: null},
        resolution: {type: 'v2', value: null},
    },

    vertexShader: `varying vec2 vUv;
        void main (void)
        {
            vUv = uv;
            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * modelViewPosition;
        }`,

    fragmentShader: `uniform float time;
        uniform float i;
        uniform vec2 resolution;
        uniform sampler2D tex;
        varying vec2 vUv;

        /* fx = speed x, fy = speed y, ax = radius x, ay = radius y, i = intensity */
        float ball(vec2 loc, float fx, float fy, float ax, float ay, float i) {
            float rx = loc.x + cos(time * fx) * 0.065 * ax;
            float ry = loc.y + sin(time * fy) * 0.065 * ay;
            vec2 r = vec2(rx, ry);
            return i / length(r);
        }

        void main(void) {
            vec2 q = gl_FragCoord.xy / resolution.xy;
            vec2 p = -1.0 + 2.0 * q;
            p.x	*= resolution.x / resolution.y;

            float col = 0.0;
            col += ball(p, 4.0, 1.0, 0.25, 0.25, i);
            col += ball(p, 2.0, 4.0, 0.25, 0.45, i);
            col += ball(p, 2.0, 4.0, 0.55, 0.25, i);

            col += ball(p, -4.0, -3.0, 0.25, 0.25, i);
            col += ball(p, -3.0, -4.0, 0.45, 0.25, i);
            col += ball(p, -4.0, -2.0, 0.25, 0.55, i);

            vec4 texel = texture2D (tex, vUv);
            vec4 balls = vec4(col * 0.2, col * 0.5, col, 1.0);

            gl_FragColor = mix(texel, balls, 0.5);
        }`,
};

export {GlowShader};

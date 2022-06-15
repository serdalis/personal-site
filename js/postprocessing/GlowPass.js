/*import {Mesh, OrthographicCamera, PlaneBufferGeometry, Scene, ShaderMaterial, UniformsUtils, Vector2} from 'three';
import {GlowShader} from '../shaders/GlowShader';
import {Pass} from './Pass.js';

var GlowPass = function (intensity) {
    Pass.call(this);
    if (GlowShader === undefined) console.error('THREE.GlowPass relies on THREE.GlowShader');
    var shader = GlowShader;
    this.uniforms = UniformsUtils.clone(shader.uniforms);
    this.material = new ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader,
    });
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.scene = new Scene();
    this.quad = new Mesh(new PlaneBufferGeometry(2, 2), null);
    this.quad.frustumCulled = false; // Avoid getting clipped
    this.scene.add(this.quad);
    this.intensity = 0;
    this.totalTime = 0;
};

GlowPass.prototype = Object.assign(Object.create(Pass.prototype), {
    constructor: GlowPass,

    // eslint-disable-next-line no-unused-vars
    render: function (renderer, writeBuffer, readBuffer, deltaTime, maskActive) {
        this.totalTime += deltaTime;

        this.uniforms['i'].value = this.intensity;
        this.uniforms['resolution'].value = new Vector2(readBuffer.width, readBuffer.height);
        this.uniforms['tex'].value = readBuffer.texture;
        this.uniforms['time'].value = this.totalTime;
        this.quad.material = this.material;

        renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
        renderer.render(this.scene, this.camera);
    },
});

export {GlowPass};
*/

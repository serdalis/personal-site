import {useEffect, useState} from 'react';
import {Sun} from './components/design/Sun';
import {StarQuater} from './components/design/StarQuater';
import {EffectComposer, Bloom, GodRays} from '@react-three/postprocessing';
import {sRGBEncoding, Clock, Vector3, Color} from 'three';
import { GroupProps, useFrame, useThree } from '@react-three/fiber';
import { Plane } from './components/design/Plane';

export function App() {
    const clock = new Clock();
    const RotationSpeed = 0.025;
    const {camera, gl} = useThree();
    const [light, setLight] = useState();
    const [star, setStar] = useState();

    useEffect(() => void (gl.outputEncoding = sRGBEncoding));

    useFrame(() => {
        const interval = clock.getDelta();
        const rotationDeltaZ = RotationSpeed * interval;

        if (star) (star as GroupProps).rotateZ(rotationDeltaZ);
    });

    return (
        <>
            <Plane color={new Color('#000000')} />
            <pointLight intensity={50} position={[0, 0, 0.25]} color={'#2080B0'} decay={0} />

            <Sun ref={setLight} position={[0, 0, -0.01]} />
            <group ref={setStar as any} castShadow={true}>
                <StarQuater position={new Vector3(0,0,0)} initialRotation={0} />
                <StarQuater position={new Vector3(0,0,0)} initialRotation={90} />
                <StarQuater position={new Vector3(0,0,0)} initialRotation={180} />
                <StarQuater position={new Vector3(0,0,0)} initialRotation={270} />
            </group>
            <EffectComposer>
                {/*<GlowPass attachArray="passes" intensity={0.01} />*/}
                <Bloom luminanceThreshold={0.01} intensity={2} luminanceSmoothing={0.5} />
                {/*<glitchPass attachArray="passes" factor={0.2} glitchDelta={0.05} glitchPause={2} glitchActive={0.2} />*/}
                {/*light && (<GodRays
                    sun={light}
                    blendFunction={BlendFunction.SCREEN}
                    samples={30}
                    density={0.97}
                    decay={0.96}
                    weight={0.6}
                    exposure={0.4}
                    clampMax={1}
                    width={Resolution.AUTO_SIZE}
                    height={Resolution.AUTO_SIZE}
                    kernelSize={KernelSize.SMALL}
                    blur={0.5}
                />)*/}
            </EffectComposer>
        </>
    );
}

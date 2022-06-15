import React, {useEffect, useState} from 'react';
import {useFrame, useThree, GroupProps} from 'react-three-fiber';

import {Plane} from './components/design/Plane';
import {Sun} from './components/design/Sun';
import {StarQuater} from './components/design/StarQuater';
import {EffectComposer, Bloom, GodRays} from '@react-three/postprocessing';
import {BlendFunction, Resolution, KernelSize} from 'postprocessing';
import {Group, sRGBEncoding} from 'three';

export function App() {
    const RotationSpeed = 0.00004;
    const {camera, gl} = useThree();
    const [light, setLight] = useState();
    const [q1, setQ1] = useState();
    const [q2, setQ2] = useState();
    const [q3, setQ3] = useState();
    const [q4, setQ4] = useState();

    let last = performance.now();

    useEffect(() => void (gl.outputEncoding = sRGBEncoding));

    useFrame(() => {
        const now = performance.now();
        const interval = now - last;
        const rotationDelta = RotationSpeed * interval;

        if (q1) (q1 as GroupProps).rotateZ(rotationDelta);
        if (q2) (q2 as GroupProps).rotateZ(rotationDelta);
        if (q3) (q3 as GroupProps).rotateZ(rotationDelta);
        if (q4) (q4 as GroupProps).rotateZ(rotationDelta);

        last = now;
    });

    return (
        <>
            <Plane color={'#272727'} />
            <pointLight intensity={50} position={[0, 0, 0.25]} color={'#2080B0'} decay={0} />
            {/*@ts-ignore*/}
            <Sun ref={setLight} position={[0, 0, -0.01]} />
            {/*@ts-ignore*/}
            <StarQuater ref={setQ1} position={[0, 0, 0]} initialRotation={0} />
            {/*@ts-ignore*/}
            <StarQuater ref={setQ2} position={[0, 0, 0]} initialRotation={90} />
            {/*@ts-ignore*/}
            <StarQuater ref={setQ3} position={[0, 0, 0]} initialRotation={180} />
            {/*@ts-ignore*/}
            <StarQuater ref={setQ4} position={[0, 0, 0]} initialRotation={270} />

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

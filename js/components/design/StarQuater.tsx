import { MeshStandardMaterialProps } from '@react-three/fiber';
import {ForwardedRef, forwardRef, useMemo, useRef} from 'react';
import {Vector3, Shape, sRGBEncoding, TextureLoader, AdditiveBlending, Group, Texture} from 'three';
import data from '../../data';

const degToRad = (degrees: number) => degrees * (Math.PI / 180);

interface StarProps {
    position: Vector3;
    initialRotation: number;
};

const StarQuater = forwardRef(({position, initialRotation}: StarProps, ref: any) => {
    const currentRotation = degToRad(initialRotation);
    const scaleV3 = new Vector3(5, 5, 1);
    const positionV3 = position;
    const url = data.clouds;
    const mapped = useRef<THREE.Mesh>(null!);

    const shape = useMemo(() => {
        let myShape = new Shape();
        myShape.moveTo(0.15, 0.015);
        myShape.lineTo(0.85, 0.015);
        myShape.lineTo(0.18, 0.18);
        myShape.lineTo(0.015, 0.85);
        myShape.lineTo(0.015, 0.15);
        myShape.lineTo(0.11, 0.11);
        myShape.lineTo(0.15, 0.015);
        return myShape;
    }, []);

    const extrudeSettings = {
        steps: 2,
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.03,
        bevelOffset: -0.03,
        bevelSegments: 1,
    };

    var textureLoaded = (texture: Texture) => {
        texture.encoding = sRGBEncoding;
        const materialStandard = (mapped.current.material as MeshStandardMaterialProps);

        materialStandard.map = texture;
        materialStandard.needsUpdate = true;
    };

    useMemo(() => new TextureLoader().load(url, textureLoaded), [url]);

    return (
        <group ref={ref} rotation-z={currentRotation} position={positionV3} scale={scaleV3}>
            <mesh ref={mapped}>
                <shapeGeometry attach="geometry" args={[shape]} />
                <meshStandardMaterial attach="material" color={'#204070'} />
            </mesh>
            <mesh castShadow>
                <extrudeBufferGeometry attach="geometry" args={[shape, extrudeSettings]} />
                <meshPhongMaterial attach="material" color={'#206090'} transparent blending={AdditiveBlending} />
            </mesh>
            <pointLight intensity={2} position={[5.5, 5.5, 0.2]} color={'#2080B0'} decay={0} />
        </group>
    );
});

export {StarQuater};

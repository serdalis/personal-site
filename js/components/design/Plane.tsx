import { useThree } from '@react-three/fiber';
import {useMemo} from 'react';
import {sRGBEncoding, TextureLoader, Color} from 'three';

interface PlaneProps {
    color: Color;
};

interface ImageProps {
    url: string;
    opacity: number;
};

const Plane = ({color}: PlaneProps) => {
    const {viewport} = useThree();
    return (
        <mesh scale={[viewport.width, viewport.height, 1]} receiveShadow={true}>
            <planeGeometry attach="geometry" args={[1, 1]} />
            <meshLambertMaterial attach="material" color={color} />
        </mesh>
    );
}

const Image = ({url, opacity}: ImageProps) => {
    const {viewport} = useThree();

    const texture = useMemo(() => {
        new TextureLoader().load(url, (texture) => (texture.encoding = sRGBEncoding));
    }, [url]);

    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeBufferGeometry attach="geometry" args={[5, 5]} />
            <meshLambertMaterial attach="material" transparent opacity={opacity}>
                <primitive attach="map" object={texture} />
            </meshLambertMaterial>
        </mesh>
    );
}

export {Plane};
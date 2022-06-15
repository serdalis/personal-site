import React, {useMemo} from 'react';
import {useThree} from 'react-three-fiber';
import {sRGBEncoding, TextureLoader} from 'three';

export function Plane({color}) {
    const {viewport} = useThree();
    return (
        <mesh scale={[viewport.width, viewport.height, 1]} receiveShadow>
            <planeGeometry attach="geometry" args={[1, 1]} />
            <meshLambertMaterial attach="material" color={color} />
        </mesh>
    );
}

export function Image({url, opacity, ...props}) {
    const {viewport} = useThree();

    const texture = useMemo(() => {
        new TextureLoader().load(url, (texture) => (texture.encoding = sRGBEncoding));
    }, [url]);

    return (
        <mesh {...props} scale={[viewport.width, viewport.height, 1]}>
            <planeBufferGeometry attach="geometry" args={[5, 5]} />
            <meshLambertMaterial attach="material" transparent opacity={opacity}>
                <primitive attach="map" object={texture} />
            </meshLambertMaterial>
        </mesh>
    );
}

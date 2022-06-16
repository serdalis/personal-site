import * as THREE from 'three';
import React, {forwardRef} from 'react';

const Sun = forwardRef(({position}, ref) => {
    const positionV3 = new THREE.Vector3(...position);

    return (
        <mesh ref={ref} position={positionV3}>
            <sphereGeometry attach="geometry" attachObject={['attributes', 'position']} args={[0.1, 16, 16]} />
            <meshPhongMaterial attach="material" color="white" />
        </mesh>
    );
});

Sun.displayName = 'Sun';
export {Sun};

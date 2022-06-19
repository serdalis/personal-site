import { Vector3 } from "@react-three/fiber";
import { forwardRef } from "react";

interface SunProps {
    position: Vector3;
};

const Sun = forwardRef(({position}: SunProps, ref: any) => {
    const positionV3 = position;

    return (
        <mesh ref={ref} position={positionV3}>
            <sphereGeometry attach="geometry" args={[0.1, 16, 16]} />
            <meshPhongMaterial attach="material" color="white" />
        </mesh>
    );
});

export {Sun};

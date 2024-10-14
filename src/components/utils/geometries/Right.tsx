import { Mesh } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface RingProps {
    numx: number;
    numy: number;
    numz: number;
    innerRadius: number;
    outerRadius: number;
    thetaSegments: number;
    phiSegments: number;
    position: [number, number, number];
}

export const Ring = ({ numx, numy, numz, innerRadius, outerRadius, thetaSegments, phiSegments, position }: RingProps) => {
    const ring = useRef<Mesh>(null!);

    useFrame(() => {
        if (ring.current) {
            ring.current.rotation.x += numx;
            ring.current.rotation.y += numy;
            ring.current.rotation.z += numz;
        }
    });

    return (
        <mesh ref={ring} position={position}>
            <meshBasicMaterial wireframe />
            <ringGeometry args={[innerRadius, outerRadius, thetaSegments, phiSegments]} />
        </mesh>
    );
};
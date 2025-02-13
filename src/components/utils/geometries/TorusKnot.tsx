'use client'
import { Mesh } from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { TorusKnot } from '@react-three/drei';


interface TorusKnotProps {
  numx: number;
  numy: number;
  numz: number;
  radius: number;
  tube: number;
  tubularSegments: number;
  radialSegments: number;
  p: number;
  q: number;
  rotation: [number, number, number];
  position: [number, number, number];
}

export const TorusKnots = () => {
  return (
    <mesh>
      <TorusKnot
        args={[8, 3, 100, 16]} // [radius, tube, tubularSegments, radialSegments]
        position={[0, 0, -6]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial wireframe />
      </TorusKnot>
    </mesh>
  )
}
'use client'
import { Canvas, } from "@react-three/fiber";
import {
  Bloom, EffectComposer,
  ASCII,
  HueSaturation,
  Scanline
} from "@react-three/postprocessing";
import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const StamentScene = () => {
  return (
    <div className="w-44 h-48 mt-5 border border-white/50
    rounded-lg sm:w-[50vw] sm:h-[55vw] sm:p-30
    lg:w-[30vw] lg:h-[20vw]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="white" />
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.3}
            height={200} />
          <HueSaturation hue={0.3} saturation={0.8} />
          <Scanline />
        </EffectComposer>
        <Geometryhome />
      </Canvas>
    </div>
  );
};

interface GeometriesProps {

}

const Geometryhome = () => {
  const dodeca = useRef<Mesh>(null!)

  useFrame(() => {
    if (dodeca.current) {
      dodeca.current.rotation.x += 0.001
      dodeca.current.rotation.y += 0.001
      dodeca.current.rotation.z += 0.001
    }
  })
  return (
    <mesh ref={dodeca} position={[0, 0, 0]}>
      <torusKnotGeometry args={[2.2, 0.6, 80, 50]} />
      <meshBasicMaterial wireframe />
    </mesh>
  )
}

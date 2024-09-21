'use client'
import { Canvas, } from "@react-three/fiber";
import { Torus } from "./geometris/Torus";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const StamentScene = () => {
  return (
    <div className="w-44 h-48 mt-5 border border-white/50
    rounded-lg sm:w-[50vw] sm:h-[55vw] sm:p-30
    lg:w-[30vw] lg:h-[20vw]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="white" />
        <Torus />
        <EffectComposer>
          <Bloom
            intensity={0.1}
            luminanceThreshold={0}
            luminanceSmoothing={0.3}
            height={200} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};



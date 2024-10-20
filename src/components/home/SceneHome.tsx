'use client'
import { Canvas } from "@react-three/fiber";
import {
  Geometryhome,
  SceneSettingsHome,
  EffectComposerHome
} from '@/components'

export const HomeScene = () => {
  return (
    <div className="w-44 h-48 mt-5 border border-white/50
    rounded-lg sm:w-[50vw] sm:h-[55vw] sm:p-30
    lg:w-[30vw] lg:h-[20vw]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <SceneSettingsHome />
        <EffectComposerHome />
        <Geometryhome />
      </Canvas>
    </div>
  );
};

interface GeometriesProps {

}


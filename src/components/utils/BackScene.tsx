import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'
import { Suspense } from 'react'
import {
  EffectsScene,
  SceneSttings,
  Box
} from '@/components'
interface BackSceneProps {
  children: ReactNode
}

export const BackScene = ({ children }: BackSceneProps) => {

  return (
    <div className="absolute z-10 w-dvw h-dvh">
      <Canvas
        flat
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 0], fov: 50 }}
        gl={{
          antialias: false,
          powerPreference: 'low-power',
        }}
        className='absolute top-0
        left-0 w-full h-full' >
        <color attach="background" args={['#000']} />
        <Suspense fallback={null}>
          {children}
          <SceneSttings />
          <EffectsScene />
          <Box />
        </Suspense>
      </Canvas>
    </div>
  );
}





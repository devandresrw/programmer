import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'
import { Suspense } from 'react'
import {
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
        camera={{
          position: [0, 0, 0],
          fov: 50,
          near: 0.1,
          far: 2000
        }}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
        }}
        className='absolute top-0
        left-0 w-full h-full' >
        <color attach="background" args={['#000']} />
        <Suspense fallback={null}>
          <SceneSttings />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}





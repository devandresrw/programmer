import {Canvas} from '@react-three/fiber'
import {ReactNode} from 'react'

interface BackSceneProps{
    children: ReactNode
}

export const BackScene = ({children}:BackSceneProps) =>{
    return (
      <div className="absolute z-10 w-dvw h-dvh">
        <Canvas className='absolute top-0 
        left-0 w-full h-full' >
            {children}
        </Canvas>
      </div>
    );
} 





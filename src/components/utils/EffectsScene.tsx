import {
    Bloom,
    Noise,
    ChromaticAberration,
    Scanline
} from '@react-three/postprocessing'
import { Vector2 } from 'three'

export const EffectsScene = () => {
    return (
        <>
            <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={300}
            />
            <Noise opacity={0.02} />
            <ChromaticAberration
                offset={new Vector2(1, 1)}
                radialModulation={true}
                modulationOffset={0.5}
            />
            <Scanline />
        </>
    )
}
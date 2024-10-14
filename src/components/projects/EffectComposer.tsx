import {
    EffectComposer,
    Bloom,
    Scanline
} from '@react-three/postprocessing'

export const EffectComposerProjects = () => {
    return (
        <EffectComposer>
            <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={300} />
            <Scanline />
        </EffectComposer>
    )
}
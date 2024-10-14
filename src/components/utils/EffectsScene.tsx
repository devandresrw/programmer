import {
    Bloom
} from '@react-three/postprocessing'

export const EffectsScene = () => {
    return (
        <>
            <Bloom
                luminanceThreshold={0.9}
                luminanceSmoothing={0.9}
                height={1000}
            />
        </>
    )
}
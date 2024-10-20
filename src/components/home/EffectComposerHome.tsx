import {
    Bloom, EffectComposer,
    HueSaturation,
    Scanline
} from "@react-three/postprocessing";


export const EffectComposerHome = () => {
    return (
        <EffectComposer>
            <Bloom
                intensity={0.5}
                luminanceThreshold={0.3}
                luminanceSmoothing={0.3}
                height={200} />
            <HueSaturation hue={0.3} saturation={0.8} />
            <Scanline />
        </EffectComposer>
    )
}
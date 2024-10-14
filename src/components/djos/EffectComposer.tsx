import {
    EffectComposer,
    HueSaturation,
    Bloom
} from '@react-three/postprocessing';

export const EffectComposerDjos = () => {
    return (
        <EffectComposer>
            <HueSaturation hue={0.8} saturation={0.8} />
            <Bloom />
        </EffectComposer>
    )
}
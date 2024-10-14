import {
    EffectComposer,
    HueSaturation,
    Bloom
} from '@react-three/postprocessing';

export const EffectComposerSkills = () => {
    return (
        <EffectComposer>
            <HueSaturation hue={0.8} saturation={0.8} />
            <Bloom />
        </EffectComposer>
    )
}
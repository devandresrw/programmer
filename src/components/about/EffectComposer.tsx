import {
    EffectComposer,
    HueSaturation,
    Bloom,
    N8AO,
} from "@react-three/postprocessing";

export const EffectComposerAbout = () => {
    return (
        <EffectComposer>
            <HueSaturation hue={0.8} saturation={0.8} />
            <Bloom />
        </EffectComposer>
    )
}
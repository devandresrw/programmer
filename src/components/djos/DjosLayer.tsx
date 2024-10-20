import {
  BackScene,
  GlassContainer,
  Box,
  TextDjos,
  Lathe,
  EffectComposerDjos,
  WrapperDjos
} from "@/components";

export const DjosLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <EffectComposerDjos />
        <Lathe
          numx={0.000}
          numy={0.002}
          position={[0, 0, -20]}
        />
      </BackScene>
      <GlassContainer>
        <WrapperDjos />
      </GlassContainer>
    </div>
  );
};


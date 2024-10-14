import {
  BackScene,
  GlassContainer,
  Box,
  TextAbout,
  EffectComposerAbout,
  Poly
} from "@/components";

const AboutLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <EffectComposerAbout />
        <Poly
          numx={0.001}
          numy={0.001}
          size={[10, 10, 45]}
          position={[0, 0, -10]}
        />
      </BackScene>
      <GlassContainer>
        <TextAbout />
      </GlassContainer>
    </div>
  );
};

export default AboutLayer
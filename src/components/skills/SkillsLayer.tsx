import {
  BackScene,
  GlassContainer,
  WrapperSkills,
  Octahedron,
  EffectComposerSkills
} from "@/components";


export const SkillsLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <EffectComposerSkills />
        <Octahedron
          numx={0.001}
          numy={0.001}
          numz={0.000}
          size={10}
          position={[0, 0, -10]} />
      </BackScene>
      <GlassContainer>
        <WrapperSkills />
      </GlassContainer>
    </div>
  );
};


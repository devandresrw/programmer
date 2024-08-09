import { BackScene, GlassContainer, Box, TextSkills, IconsSkills } from "@/components";

const SkillsLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <Box />
      </BackScene>
      <GlassContainer>
        <TextSkills />
        <IconsSkills />
      </GlassContainer>
    </div>
  );
};

export default SkillsLayer;
import { BackScene, GlassContainer, Box, TextSkills, IconsSkills } from "@/components";
import { WrapperSkills } from "../skills/WrapperSkills";

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
        <WrapperSkills />
      </GlassContainer>
    </div>
  );
};

export default SkillsLayer;
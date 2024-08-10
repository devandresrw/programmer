import { 
  BackScene,
  GlassContainer, 
  Box,
  WrapperSliderProjects,
  TextProjects
 } from "@/components";

const WorksLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <Box />
      </BackScene>
      <GlassContainer>
        <TextProjects />
        <WrapperSliderProjects />
      </GlassContainer>
    </div>
  );
};

export default WorksLayer;
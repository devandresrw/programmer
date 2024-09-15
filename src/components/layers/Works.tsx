import { 
  BackScene,
  GlassContainer, 
  Box,
  
 } from "@/components";
import { WrapperProjects } from "../projects/WrapperProjects";

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
          <WrapperProjects />
      </GlassContainer>
    </div>
  );
};

export default WorksLayer;
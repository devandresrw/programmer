import { 
  BackScene, 
  GlassContainer, 
  Box,
  TextDjos
} from "@/components";
import { WrapperDjos } from "@/components/djos/WrapperDjos";

const DjosLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <Box />
      </BackScene>
      <GlassContainer>
         <WrapperDjos/>
      </GlassContainer>
    </div>
  );
};

export default DjosLayer;
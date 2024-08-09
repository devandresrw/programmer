import { 
  BackScene, 
  GlassContainer, 
  Box,
  TextDjos
} from "@/components";

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
          <TextDjos />
      </GlassContainer>
    </div>
  );
};

export default DjosLayer;
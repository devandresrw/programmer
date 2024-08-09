import { 
  BackScene, 
  GlassContainer, 
  Box,
  TextAbout
 } from "@/components";

 const AboutLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <Box />
      </BackScene>
      <GlassContainer>
        <TextAbout />
      </GlassContainer>
    </div>
  );
};

export default AboutLayer
import { BackScene, GlassContainer, Box } from "@/components";

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
        <h1>Statement Layer</h1>
      </GlassContainer>
    </div>
  );
};

export default AboutLayer
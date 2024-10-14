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
        <Box numx={0.01} numy={0.01}
          size={[20, 0, -5]}
          position={[6, 6, 6]} />
      </BackScene>
      <GlassContainer>
        <TextAbout />
      </GlassContainer>
    </div>
  );
};

export default AboutLayer
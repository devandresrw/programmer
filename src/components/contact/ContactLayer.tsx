import {
  BackScene,
  GlassContainer,
  WrapperContact,
  TorusKnots
} from "@/components";

export const ContactLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <TorusKnots />
      </BackScene>
      <GlassContainer>
        <WrapperContact />
      </GlassContainer>
    </div>
  );
};


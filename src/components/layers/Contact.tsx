import { 
  BackScene,
  GlassContainer, 
  Box,
  TextContact, 
  FormContact,
} from "@/components";

 const ContactLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <Box />
      </BackScene>
      <GlassContainer>
        <TextContact />
        <FormContact />
      </GlassContainer>
    </div>
  );
};

export default ContactLayer
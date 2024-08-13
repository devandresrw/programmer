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
        <div className="flex flex-col gap-4 px-3">
          <TextContact />
          <FormContact />
        </div>
      </GlassContainer>
    </div>
  );
};

export default ContactLayer
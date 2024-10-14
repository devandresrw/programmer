import { 
  BackScene,
  GlassContainer, 
  Box,
  TextContact, 
  FormContact,
} from "@/components";
import { TorusKnots } from "../utils/geometries/TorusKnot";

 const ContactLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <TorusKnots />
      </BackScene>
      <GlassContainer>
        <TextContact />
      </GlassContainer>
    </div>
  );
};

export default ContactLayer
import { WrapperSliderProjects } from "../projects/WrapperSlider";
import { GlassTitle } from "../utils/GlassTitle";
import { FormContact } from "./FormConstact";


export  const TextContact = () => {
    return (
      <GlassTitle
        title="Contacto"
        text="Si tienes un proyecto y quieres desarrollarlo conmigo, 
          deja tus datos y me pondré en contacto contigo."
      >
        <FormContact />
      </GlassTitle>
    );
}
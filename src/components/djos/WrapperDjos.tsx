import { GlassTitle } from "../utils/GlassTitle"
import { SlideDjos } from "./SlideDjos"



export const WrapperDjos = () => {
    return (
      <GlassTitle
        title="Dojos tecnicos"
        text="Siempre he sido autodidacta, algunos de los 
        recursos que he utilizado para aprender, tengo una
        alta puntuación en cada uno de ellos."
      >
        <SlideDjos />
      </GlassTitle>
    );

}
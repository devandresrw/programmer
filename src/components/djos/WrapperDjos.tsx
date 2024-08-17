import { GlassTitle } from "../utils/GlassTitle"
import { SlideDjos } from "./SlideDjos"



export const WrapperDjos = () => {
    return (
      <GlassTitle
        title="Dojos tecnicos"
        text=" Mi experiencia no solo fue adquirida mediante los cargos que he
          ocupado o de espacios académicos formales, mis habilidades más
          contundentes fueron entrenadas en los siguientes &#39;dojos&#39;, en
          donde mi algoritmia, mi conocimiento de front-end o de ciberseguridad
          fue entrenado aquí. Puedes verificar mis niveles en cada uno de ellos
          solo dando clic."
      >
        <SlideDjos />
      </GlassTitle>
    );

}
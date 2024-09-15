import { GlassTitle } from "../utils/GlassTitle"
import { SliderPro } from "./ProSlider";


export const WrapperProjects = () => {
    return (
      <GlassTitle
        title="Colaboraciones"
        text="Algunos de los proyectos en los que he colaborado">
            <SliderPro />
      </GlassTitle>
    );
}
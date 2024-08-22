import { GlassTitle } from "../utils/GlassTitle"
import { WrapperSliderProjects } from "./WrapperSlider";





export const WrapperProjects = () => {
    return (
      <GlassTitle
        title="Algunos trabajos"
        text="Estos son algunos de los proyectos que he desarrollado desde cero, o
          sea llevar una idea a un producto mínimo viable">
            <WrapperSliderProjects />
      </GlassTitle>
    );
}
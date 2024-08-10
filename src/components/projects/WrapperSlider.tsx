
import { useSlider } from '@/hooks';
import {BtnSlide} from '@/components'
import HumanitasProjects from '@/components/projects/Humanitas';
import AgencyProjects from '@/components/projects/Agency';
import CuartelProjects from '@/components/projects/Cuartel';

const components = [
    HumanitasProjects,
    CuartelProjects,
    AgencyProjects
]

export const WrapperSliderProjects = () => {
    const {CurrentComponent, handleNext, handlePrev} = useSlider(components);
    return (
      <div className="text-white w-56 h-28 bg-red-300">
        <div className="w-full h-full bg-slate-500">
          <CurrentComponent />
        </div>
        <BtnSlide
          onClick={
            handleNext
        }
          isLoR="l"
        >
          <h1>asd</h1>
        </BtnSlide>
        <BtnSlide
          onClick={
            handlePrev
          }
          isLoR="r"
        >
          <h1>asd</h1>
        </BtnSlide>
      </div>
    );
}

import { useSlider } from '@/hooks';
import {BtnSlide} from '@/components'
import { ReactNode } from 'react';
import HumanitasProjects from '@/components/projects/Humanitas';
import AgencyProjects from '@/components/projects/Agency';
import CuartelProjects from '@/components/projects/Cuartel';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
const components = [
    HumanitasProjects,
    CuartelProjects,
    AgencyProjects
]

export const WrapperSliderProjects = () => {
    const {CurrentComponent, handleNext, handlePrev} = useSlider(components);
    return (
      <div className="relative text-white w-full
      border border-white/50 rounded-lg">
        <div className="w-full h-full">
          <CurrentComponent />
        </div>
        <BtnSlide onClick={handleNext} isLoR="l">
          <BiArrowFromLeft/>
        </BtnSlide>
        <BtnSlide onClick={handlePrev} isLoR="r">
          <BiArrowFromRight />
        </BtnSlide>
      </div>
    );
}


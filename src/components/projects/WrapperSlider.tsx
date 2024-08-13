
import { useSlider } from '@/hooks';
import {BtnSlide} from '@/components'
import { ReactNode } from 'react';
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
        <BtnSlide onClick={handleNext} isLoR="l">
          {">"}
        </BtnSlide>
        <BtnSlide onClick={handlePrev} isLoR="r">
          {"<"}
        </BtnSlide>
      </div>
    );
}

interface BtnSlideProps { 
  onClick: () => void
  children: ReactNode
  isLoR?: string
  styles?: string
}
const BtnSlideWorks = ({onClick, children}: BtnSlideProps) => {
  return(
    <button
      className=''
    >
      {children}
    </button>
  )
}
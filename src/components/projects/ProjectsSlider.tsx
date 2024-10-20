import { v4 as uuidv4 } from 'uuid'
import {
    LogoAgency,
    LogoCuartel,
    LogoHumanias,
    LogoPoesia
} from '@/components'

import { useProjectsSlider } from '@/hooks'

export const ProjectsSlider = () => {
    const components: JSX.Element[] = [
        <LogoHumanias key={uuidv4()} />,
        <LogoPoesia key={uuidv4()} />,
        <LogoAgency key={uuidv4()} />,
        <LogoCuartel key={uuidv4()} />
    ]
    const { current, next, prev, setCurrent } = useProjectsSlider({ numCom: components.length, interval: 5000 });


    return (
        <div className="flex flex-col items-center">
            <div className="slider w-full h-48 flex items-center justify-center">
                {components[current]}
            </div>
            <div className="dots flex justify-center mt-4">
                {components.map((_, index) => (
                    <span
                        key={index}
                        className={`dot h-3 w-3 mx-1 rounded-full cursor-pointer ${current === index ? "border border-white/50" : "border border-white/80"
                            }`}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}


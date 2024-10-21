import { FaFigma, FaCss3, FaHtml5, FaJs, FaWordpress, FaReact } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiThreedotjs } from 'react-icons/si';

export const MarqueFrontend = () => {
    return (
        <div className="border-white rounded-full custom-blur-inner p-4">
            <div className="flex flex-row justify-center flex-wrap gap-2 relative z-10">
                <FaFigma className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
                <FaCss3 className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
                <FaHtml5 className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
                <SiTypescript className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
                <FaJs className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
                <FaWordpress className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
                <FaReact className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
                <SiNextdotjs className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
                <SiThreedotjs className="flex-basis-1/4 lg:flex-basis-1/3" size={25} />
            </div>
        </div>
    );
};
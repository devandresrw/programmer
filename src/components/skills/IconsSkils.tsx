import {
  SiNestjs,
  SiReactivex,
  SiNextdotjs,
  SiTypescript,
  SiThreedotjs,
  SiMongodb,
  SiSqlite,
  SiKubernetes,
  SiMysql,
} from "react-icons/si";
import {
  FaReact,
  FaLinux,
  FaFigma,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaCpanel,
} from "react-icons/fa";

import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

export const IconsSkills = () => {
    return (
      
        <div className="mt-5 flex flex-row items-center justify-center gap-4 flex-wrap basis-3 w-3/4">
          <div className="relative group">
            <SiTypescript size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              TypeScript
            </span>
          </div>
          <div className="relative group">
            <FaReact size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              React
            </span>
          </div>
          <div className="relative group">
            <SiNextdotjs size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              Next.js
            </span>
          </div>
          <div className="relative group">
            <SiThreedotjs size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              Three.js
            </span>
          </div>
          <div className="relative group">
            <RiTailwindCssFill size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              Tailwind CSS
            </span>
          </div>
          <div className="relative group">
            <FaFigma size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              Figma
            </span>
          </div>
          <div className="relative group">
            <SiNestjs size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              NestJS
            </span>
          </div>
          <div className="relative group">
            <FaNode size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              Node.js
            </span>
          </div>
          <div className="relative group">
            <SiReactivex size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              RxJS
            </span>
          </div>
          <div className="relative group">
            <SiMongodb size={45} fill="#f2f2f2" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-white bg-black p-1 rounded">
              MongoDB
            </span>
          </div>
          <SiSqlite size={45} fill="#f2f2f2" />
          <BiLogoPostgresql size={45} fill="#f2f2f2" />
          <SiMysql size={45} fill="#f2f2f2" />
          <FaDocker size={45} fill="#f2f2f2" />
          <SiKubernetes size={45} fill="#f2f2f2" />
          <FaLinux size={45} fill="#f2f2f2" />
          <FaGitAlt size={45} fill="#f2f2f2" />
          <FaCpanel size={45} fill="#f2f2f2" />
        </div>
    );
}


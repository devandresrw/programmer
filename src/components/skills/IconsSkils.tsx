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
import { ElementType } from "react";

interface SkillIconProps {
  IconComponent: ElementType
  size: number
  fill: string 
  label: string
}

const SkillIcon = ({
  IconComponent, 
  size,
  fill,
  label
}: SkillIconProps) => {

  return (
    <div className="relative group">
      <IconComponent size={size} fill={fill} />
      <span className="absolute bottom-0 left-1/2
      transform -translate-x-1/2 translate-y-full
      opacity-0 group-hover:opacity-100 text-white
    bg-black p-1 rounded z-10">
        {label}
      </span>
    </div>
  );

}

export const IconsSkills = () => {
 
  const skills = [
    {
      IconComponent: SiTypescript,
      size: 30,
      fill: "#f2f2f2",
      label: "TypeScript",
    },
    {
      IconComponent: FaReact,
      size: 30,
      fill: "#f2f2f2",
      label: "React",
    },
    {
      IconComponent: SiNextdotjs,
      size: 30,
      fill: "#f2f2f2",
      label: "Next.js",
    },
    {
      IconComponent: SiNestjs,
      size: 30,
      fill: "#f2f2f2",
      label: "Nest.js",
    },
    {
      IconComponent: SiReactivex,
      size: 30,
      fill: "#f2f2f2",
      label: "RxJS",
    },
    {
      IconComponent: SiThreedotjs,
      size: 30,
      fill: "#f2f2f2",
      label: "Three.js",
    },
    {
      IconComponent: SiMongodb,
      size: 30,
      fill: "#f2f2f2",
      label: "MongoDB",
    },
    {
      IconComponent: BiLogoPostgresql,
      size: 30,
      fill: "#f2f2f2",
      label: "PostgreSQL",
    },
    {
      IconComponent: SiMysql,
      size: 30,
      fill: "#f2f2f2",
      label: "MySQL",
    },
    {
      IconComponent: SiSqlite,
      size: 30,
      fill: "#f2f2f2",
      label: "SQLite",
    },
    {
      IconComponent: FaNode,
      size: 30,
      fill: "#f2f2f2",
      label: "Node.js",
    },
    {
      IconComponent: FaDocker,
      size: 30,
      fill: "#f2f2f2",
      label: "Docker",
    },
    {
      IconComponent: SiKubernetes,
      size: 30,
      fill: "#f2f2f2",
      label: "Kubernetes",
    },
    {
      IconComponent: FaGitAlt,
      size: 30,
      fill: "#f2f2f2",
      label: "Git",
    },
    {
      IconComponent: FaLinux,
      size: 30,
      fill: "#f2f2f2",
      label: "Linux",
    },
    {
      IconComponent: FaCpanel,
      size: 30,
      fill: "#f2f2f2",
      label: "cPanel",
    },
    {
      IconComponent: FaFigma,
      size: 30,
      fill: "#f2f2f2",
      label: "Figma",
    },
    {
      IconComponent: RiTailwindCssFill,
      size: 30,
      fill: "#f2f2f2",
      label: "Tailwind CSS",
    },
  ];
  return (
    <div className=" flex flex-row 
    items-center justify-center gap-4 
    flex-wrap basis-3 w-4/5 ">
      {
        skills.map((skill, index) =>(
          <SkillIcon 
          key={index}
          IconComponent={skill.IconComponent}
          size={skill.size}
          fill={skill.fill}
          label={skill.label}
          />
        ))
      }
    </div>
  );
}


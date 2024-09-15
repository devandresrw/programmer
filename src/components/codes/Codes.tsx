import Link from "next/link";
import {
    SiNestjs,
    SiReactivex,
    SiNextdotjs,
    SiTypescript,
    SiThreedotjs,
    SiMongodb,
  } from "react-icons/si";
  import {
    FaReact,
    FaNode,
    FaDocker,
  } from "react-icons/fa";
  
 import { BiLogoPostgresql } from "react-icons/bi";

const Codes = () =>{
    return(
        <div className="w-full flex flex-row
        justify-center gap-10 items-start">
            <Frontend />
            <Backend />
        </div>
    )
}

const Frontend = () => {
    return (
        <Link href={'/frontend'} >
                <div className="border rounded border-white/55 w-40
        h-full p-3">
            <h1 className="mb-3">Frontend</h1>
            <div className="flex flex-row justify-center flex-wrap gap-5">
                <SiTypescript className={'flex-basis-1/3'} size={30} />
                <FaReact className={'flex-basis-1/3'} size={30}/>
                <SiNextdotjs className={'flex-basis-1/3'} size={30}/>
                <SiThreedotjs className={'flex-basis-1/3'} size={30}/>
            </div>
        </div>
        </Link>
    )
}

const Backend = () => {
    return (
        <Link href={'/fullstack'} >
        <div className="border rounded border-white/55 w-40 p-3">
        <h1 className="mb-3">Fullstack</h1>
            <div className="flex flex-row justify-center flex-wrap gap-5">
                <SiNestjs className={'flex-basis-1/3'} size={30}/>
                <SiReactivex className={'flex-basis-1/3'} size={30}/>
                <SiMongodb className={'flex-basis-1/3'} size={30}/>
                <BiLogoPostgresql className={'flex-basis-1/3'} size={30}/>
                <FaNode className={'flex-basis-1/3'} size={30}/>
                <FaDocker className={'flex-basis-1/3'} size={30}/>
            </div>
        </div>
        </Link>
    )
}

export { Codes }
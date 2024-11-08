import { useStoreModalState, useSelectCodes } from '@/stores'
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

const Stacks = () => {
    return (
        <div className="w-full flex flex-col
        items-center justify-center gap-2 lg:flex-row">
            <Frontend />
            <Backend />
        </div>
    )
}

const Frontend = () => {
    const { setModalView } = useStoreModalState()
    const { setSelectCodes } = useSelectCodes()
    return (
        <div onClick={() => { setModalView(false); setSelectCodes(true) }}>
            <div className="border rounded border-white/15 w-[70vw]
        h-full p-3 sm:w-[30vw] lg:w-[10vw]">
                <h1 className="mb-3">Frontend</h1>
                <div className="flex flex-row justify-center flex-wrap gap-2">
                    <SiTypescript className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                    <FaReact className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                    <SiNextdotjs className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                    <SiThreedotjs className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                </div>
            </div>
        </div>
    )
}

const Backend = () => {
    const { setModalView } = useStoreModalState()
    const { setSelectCodes } = useSelectCodes()
    return (
        <div onClick={() => { setModalView(false); setSelectCodes(false) }}>
            <div className="border rounded border-white/15 w-[70vw] p-3
        h-full sm:w-[30vw] lg:w-[10vw] ">
                <h1 className="mb-3">Fullstack</h1>
                <div className="flex flex-row justify-center flex-wrap gap-2">
                    <SiNestjs className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                    <SiReactivex className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                    <SiMongodb className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                    <BiLogoPostgresql className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                    <FaNode className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                    <FaDocker className={'flex-basis-1/4 lg:flex-basis-1/3'} size={25} />
                </div>
            </div>
        </div>
    )
}

export { Stacks }
import { ReactNode } from "react"

interface GlassContainerProps {
    children: ReactNode
}

export const GlassContainer = ({children}: GlassContainerProps) => {

    return(
        <div className="absolute z-20 bg-glass-bg 
        backdrop-blur-custom-blur border border-border-color 
        rounded-md w-11/12 h-[90%] md:flex flex-col 
        justify-center items-center
        ">
            {children}
        </div>
    )
}
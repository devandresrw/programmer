import { ReactNode, memo } from "react"

interface GlassContainerProps {
    children: ReactNode
}

const GlassContainerSin = ({children}: GlassContainerProps) => {

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

export const GlassContainer = memo(GlassContainerSin)
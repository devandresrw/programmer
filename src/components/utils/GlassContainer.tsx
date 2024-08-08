import { ReactNode } from "react"

interface GlassContainerProps {
    children: ReactNode
}

export const GlassContainer = ({children}: GlassContainerProps) => {

    return(
        <div className="absolute z-20 bg-glass-bg backdrop-blur-custom-blur
        border border-border rounded-md w-3/4 h-3/4
        flex flex-col justify-center items-center
        ">
            {children}
        </div>
    )
}
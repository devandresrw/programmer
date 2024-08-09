import { ReactNode } from "react"

interface GlassContainerProps {
    children: ReactNode
}

export const GlassContainer = ({children}: GlassContainerProps) => {

    return(
        <div className="absolute z-20 bg-glass-bg backdrop-blur-custom-blur
        border border-border rounded-md w-1/2 h-4/5
        flex flex-col justify-center items-center
        ">
            {children}
        </div>
    )
}
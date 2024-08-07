import { ReactNode } from "react"

interface GlassContainerProps {
    children: ReactNode
}

export const GlassContainer = ({children}: GlassContainerProps) => {

    return(
        <div className="bg-glass-bg backdrop-blur-custom-blur
        border border-border rounded-md w-">
            {children}
        </div>
    )
}
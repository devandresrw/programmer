import { ImageComponent } from "@/components/frontend/ImageComponent";


export const FrontendWrapper = () => {
    return (
        <div className="w-full h-full relative p-8">
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
        </div>
    )
}
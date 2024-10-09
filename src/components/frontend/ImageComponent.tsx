import Image from "next/image";


export const ImageComponent = () => {
    return (
        <div className="border border-x-white">
            <Image
                src="/logohumanitas.png"
                alt="Next.js Logo"
                width={500}
                height={500}
            />
        </div>
    );
}
import { ReactNode } from "react";

interface GlassTitleProps {
    title: string
    text: string
    children: ReactNode
}

export const GlassTitle = ({title, text, children}: GlassTitleProps) => {
  return (
    <div
      className=" text-white text-center
       flex flex-col justify-center items-center 
       gap-7 border border-border-color
       rounded-xl w-10/12 py-5 px-3 lg:w-2/5
       select-none"
    >
      <div
        className="bg-black -translate-y-9 w-auto
        border-l border-r border-border-color flex
        justify-center items-center px-5"
      >
        <h2
          className="text-xl font-bold font-jura
           bg-glass-bg backdrop-blur-custom-blur "
        >
          [ {title} ]
        </h2>
      </div>
      <p className="text-md font-rale -mt-10 ">
        {text}
      </p>
        {children}
    </div>
  );
};
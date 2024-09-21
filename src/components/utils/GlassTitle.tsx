'use client'
import { ReactNode } from "react";
import { useRef } from "react";



interface GlassTitleProps {
  title: string
  text: string
  children: ReactNode
}

export const GlassTitle = ({ title, text, children }: GlassTitleProps) => {
  const glicht = useRef(null)
  return (
    <div
      className=" text-white text-center
       flex flex-col justify-center items-center 
       gap-4 border border-border-color
       rounded-xl p-4 w-[80vw] h-auto
       select-none sm:w-[50vw] lg:w-[30vw] "
    >
      <div
        className="bg-black -translate-y-9 w-auto
        border-l border-r border-border-color flex
        justify-center items-center px-2"
      >
        <h2
          ref={glicht}
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
import clsx from "clsx";
import { ReactNode } from "react";

interface BtnSideProps {
    onClick: () => void;
    children: ReactNode
    isLoR?: string
    styles?: string
}

const BtnSlide = ({onClick, children, isLoR}: BtnSideProps) =>{
    return (
      <button
        onClick={onClick}
        className={clsx(`absolute top-1/2 transform -translate-y-1/2
           bg-glass-bg shadow-sha-btn backdrop-blur-custom-blur
            border border-border p-3 rounded-full z-40`,
          {
            ['left-14']: isLoR === "l",
            ['right-14']: isLoR === "r",
          }
        )}
      >
        {children}
      </button>
    );
} 

export default BtnSlide;
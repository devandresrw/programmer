import clsx from "clsx";
import { ReactNode } from "react";

interface BtnSideProps {
    onClick: () => void;
    children: ReactNode
    isLoR?: string
}

export const BtnSlide = ({onClick, children, isLoR}: BtnSideProps) =>{
    return (
      <button
        onClick={onClick}
        className={clsx(`absolute top-1/2 transform -translate-y-1/2
           bg-glass-bg shadow-sha-btn backdrop-blur-custom-blur
            border border-border p-7 rounded-full`,
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

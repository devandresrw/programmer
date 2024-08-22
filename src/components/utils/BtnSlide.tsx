import clsx from "clsx";
import { ReactNode, memo } from "react";

interface BtnSideProps {
    onClick: () => void;
    children: ReactNode
    isLoR?: string
  
}

const BtnContendMemo = ({onClick, children,isLoR}:BtnSideProps) => {
  return(
    <button
      onClick={onClick} 
      className={clsx(`absolute top-1/2 z-40
        bg-glass-bg border border-white/50
        rounded-full p-4`,{
        ['left-24']: isLoR === 'l',
        ['right-24']: isLoR ===  'r' 
      })}>
        {children}
    </button>
  )
}

const BtnSlideMemo = ({onClick, children,isLoR}:BtnSideProps) => {
  return(
    <button 
      onClick={onClick}
      className={clsx(`absolute top-[40%]
        bg-glass-bg border border-white/50
        p-2 rounded-full`,{
        ['-left-10']: isLoR === 'l',
        ['-right-10']: isLoR ===  'r'
      })}>
        {children}
    </button>
  )
}

export const BtnSlide = memo(BtnSlideMemo)
export const BtnContend = memo(BtnContendMemo)
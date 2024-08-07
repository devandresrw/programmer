'use client'
import {useRef, useEffect} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useIntro} from "@/stores" 
import Image from 'next/image'

export function Preloader(){
    
    const preCon = useRef<HTMLDivElement>(null)
    const logo = useRef<HTMLImageElement>(null)
    const notPreloaderView = useIntro(state => state.notPreloaderView)
    
    useGSAP(()=>{
        const tl = gsap.timeline({
            onComplete: () => {
              notPreloaderView()
            }
        })

        tl.to(logo.current, {
          duration: 2,
          opacity: 1,
          visibility: "visible",
          ease: "sine.in",
        }),
          tl.to(logo.current, {
            duration: 2,
            opacity: 0,
          }),
          tl.to(logo.current, {
            duration: 2,
            opacity: 1,
            visibility: "visible",
            ease: "sine.in",
          }),
          tl.to(logo.current, {
            duration: 2,
            opacity: 0,
          });
    })
    
    return (
      <>
        <div className="fixed inset-0 z-50
        bg-black flex flex-col justify-center items-center"
        ref={preCon}>
            <Image 
            src="/a-blanca.svg" 
            alt="logo" 
            width={100} 
            height={100} 
            ref={logo}
            className='opacity-0'
            />
        </div>
      </>
    );
}










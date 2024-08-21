'use client'
import {useRef, useEffect} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useIntro} from "@/stores" 
import Image from 'next/image'

export function Preloader(){
    
    const preCon = useRef<HTMLDivElement>(null)
    const logo = useRef<HTMLImageElement>(null)
    const phrase1 = useRef<HTMLLIElement>(null)
    const phrase2 = useRef<HTMLLIElement>(null)
    const phrase3 = useRef<HTMLLIElement>(null) 

    const notPreloaderView = useIntro(state => state.notPreloaderView)
    
    useGSAP(()=>{
        const tl = gsap.timeline({
            onComplete: () => {
              notPreloaderView()
            }
        })

        tl.to(logo.current, {
          duration: 1,
          opacity: 1,
          visibility: "visible",
          ease: "sine.in",
        }) 
        .to(phrase1.current, {
          duration: 1,
          opacity: 1,
          visibility: "visible",
          ease: "sine.in",
        })
        .to(phrase2.current, {
          duration: 1,
          opacity: 1,
          visibility: "visible",
          ease: "sine.in",
        })
        .to(phrase3.current, {
          duration: 1,
          opacity: 1,
          visibility: "visible",
          ease: "sine.in",
        })
        .to(phrase1.current, {
          duration: 1,
          opacity: 0,
          ease: "fade.out",
        })
        .to(phrase2.current, {
          duration: 1,
          opacity: 0,
          ease: "fade.out",
        })
        .to(phrase3.current, {
          duration: 1,
          opacity: 0,
          ease: "fade.out",
        }).to(phrase1.current, {
          duration: 1,
          opacity: 1,
          visibility: "visible",
          ease: "sine.in",
        })
        .to(phrase2.current, {
          duration: 1,
          opacity: 1,
          visibility: "visible",
          ease: "sine.in",
        })
        .to(phrase3.current, {
          duration: 1,
          opacity: 1,
          visibility: "visible",
          ease: "sine.in",
        }).to(preCon.current, {
          duration: 1,
          opacity: 0,
          ease: "fade.out",
        })
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
            <div className='text-white mt-8'>
              <ul className='flex flex-row gap-4 font-jura'>
                <li className='opacity-0' ref={phrase1}>#Creative_Developer</li>
                <li className='opacity-0' ref={phrase2}>#WebMaster</li>
                <li className='opacity-0' ref={phrase3}>#FullStack</li>
              </ul>
            </div>
        </div>
      </>
    );
}










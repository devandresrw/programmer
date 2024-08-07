'use client'
import { useEffect } from "react";
import { useIntro } from "@/stores";
import {Preloader} from '@/components'
import { useHorizontalScroll } from "@/hooks"
import { 
  StatementLayer, 
  AboutLayer, 
  SkillsLayer, 
  DjosLayer,
  WorksLayer, 
  ContactLayer,
  BtnSlide
 } from "@/components";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";



export default function MyHome(){
  const view = useIntro(state => state.view)
  const {scrollContainer, scrollRight, scrollLeft} = useHorizontalScroll()
    
  useEffect(() => {

  }, [view])

    return (
      <>
        {view && <Preloader />}
        <div className="relative h-dvh w-dvw overflow-hidden">
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto overflow-y-hidden h-dvh w-dvw"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div
              className="flex-shrink-0 h-dvh w-dvw "
              style={{ scrollSnapAlign: "start" }}
            >
              <StatementLayer />
            </div>
            <div
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}
            >
              <AboutLayer />
            </div>
            <div
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}
            >
              <SkillsLayer />
            </div>
            <div
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}
            >
              <DjosLayer />
            </div>
            <div
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}
            >
              <WorksLayer />
            </div>
            <div
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}
            >
              <ContactLayer />
            </div>
          </div>
          <BtnSlide onClick={scrollLeft} isLoR="l">
            <HiArrowSmallLeft size={34} className="fill-border" />
          </BtnSlide>
          <BtnSlide onClick={scrollRight} isLoR="r">
            <HiArrowSmallRight size={34} className="fill-border" />
          </BtnSlide>
        </div>
      </>
    );
}
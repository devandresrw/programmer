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
  ContactLayer
 } from "@/components";

export default function MyHome(){
  const view = useIntro(state => state.view)
  const {scrollContainer, scrollRight, scrollLeft} = useHorizontalScroll()
    
  useEffect(() => {

  }, [view])

    return (
      <>
        {view && (<Preloader />)}
        <div className="relative h-dvh w-dvw overflow-hidden">
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto overflow-y-hidden h-dvh w-dvw"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div
              className="flex-shrink-0 h-dvh w-dvw"
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
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
          >
            Left
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
          >
            Right
          </button>
        </div>
      </>
    );
}
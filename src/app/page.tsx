'use client'
import { useEffect, useState } from "react";
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
  const [visibleIndex, setVisibleIndex] = useState(0)
  
  const components = [
    StatementLayer,
    AboutLayer,
    SkillsLayer,
    DjosLayer,
    WorksLayer,
    ContactLayer,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollContainer.current!.scrollLeft;
      const index = Math.round(scrollPosition / window.innerWidth);
      setVisibleIndex(index);
    };

    scrollContainer.current!.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.current!.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainer]);

    return (
      <>
        {view && <Preloader />}
        <div className="relative h-dvh w-dvw overflow-hidden">
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto overflow-y-hidden h-dvh w-dvw"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {components.map((Component, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-dvh w-dvw"
                style={{ scrollSnapAlign: "start" }}
              >
                {visibleIndex === index && <Component />}
              </div>
            ))}
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
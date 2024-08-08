'use client'
import { useEffect, useState } from "react";
import { useIntro } from "@/stores";
import { useHorizontalScroll } from "@/hooks"
import { BtnSlide, Preloader } from "@/components";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import dynamic from "next/dynamic";
import {useInView} from 'react-intersection-observer'

const StatementLayer = dynamic(
  () => import("@/components").then((mod) => mod.StatementLayer),
  { ssr: true }
);


export default function MyHome(){

  const view = useIntro(state => state.view)
  const {scrollContainer, scrollRight, scrollLeft} = useHorizontalScroll()

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
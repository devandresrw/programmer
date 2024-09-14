'use client'
import { useIntro } from "@/stores";
import { useHorizontalScroll } from "@/hooks"
import { BtnContend, BtnSlide, Preloader } from "@/components";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import dynamic from "next/dynamic";
import {useInView} from 'react-intersection-observer'

const StatementLayer = dynamic(
  () => import("@/components").then((mod) => mod.StatementLayer),
  { ssr: true }
);
const AboutLayer = dynamic(
  () => import("@/components").then((mod) => mod.AboutLayer),
  { ssr: true }
);

const DjosLayer = dynamic(
  () => import("@/components").then((mod) => mod.DjosLayer),
  { ssr: true }
);

const SkillsLayer = dynamic(
  () => import("@/components").then((mod) => mod.SkillsLayer),
  { ssr: true }
);

const WorksLayer = dynamic(
  () => import("@/components").then((mod) => mod.WorksLayer),
  { ssr: true }
);

const ContactLayer = dynamic(
  () => import("@/components").then((mod) => mod.ContactLayer),
  { ssr: true }
);





export default function MyHome(){

  const view = useIntro(state => state.view)
  const {scrollContainer, scrollRight, scrollLeft} = useHorizontalScroll()

  const { ref: statementRef, inView: statementInView } = useInView({triggerOnce: true});
  const { ref: aboutRef, inView: aboutInView } = useInView({triggerOnce: true});
  const { ref: djosRef, inView: djosInView } = useInView({triggerOnce: true});
  const { ref: skillsRef, inView: skillsInView } = useInView({triggerOnce: true});
  const { ref: worksRef, inView: worksInView } = useInView({triggerOnce: true});
  const { ref: contactRef, inView: contactInView } = useInView({triggerOnce: true});

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
              ref={statementRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}
            >
              {statementInView && <StatementLayer />}
            </div>
            <div
              ref={aboutRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}
            >
              {aboutInView && <AboutLayer />}
            </div>
            <div
              ref={djosRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}>

              {djosInView && <DjosLayer />}
            </div>
            <div
              ref={skillsRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}>

              {skillsInView && <SkillsLayer />}
            </div>
            <div
              ref={worksRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}>

              {worksInView && <WorksLayer />}
             </div>
             <div
              ref={worksRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}>

              {worksInView && <WorksLayer />}
             </div>
            <div
              ref={contactRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}>

              {contactInView && <ContactLayer />}
            </div> 

          </div>
          <BtnContend onClick={scrollLeft} isLoR="l">
            <HiArrowSmallLeft size={34} className="fill-border" />
          </BtnContend>
          <BtnContend onClick={scrollRight} isLoR="r">
            <HiArrowSmallRight size={34} className="fill-border" />
          </BtnContend>
        </div>
      </>
    );
}
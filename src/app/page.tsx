'use client'
import dynamic from "next/dynamic";
import { useInView } from 'react-intersection-observer'
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { useIntro, useStoreModalState } from "@/stores";
import { useHorizontalScroll } from "@/hooks"
import { BtnContend, Intro, SelectCodes } from "@/components";
import { useEffect, useRef } from "react";

const HomeLayer = dynamic(
  () => import("@/components").then((mod) => mod.HomeLayer),
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

const ProjectsLayer = dynamic(
  () => import("@/components").then((mod) => mod.ProjectsLayer),
  { ssr: true }
);

const CodesLayer = dynamic(
  () => import("@/components").then((mod) => mod.CodesLayer),
  { ssr: true }
);


const ContactLayer = dynamic(
  () => import("@/components").then((mod) => mod.ContactLayer),
  { ssr: true }
);





export default function MyHome() {

  const view = useIntro(state => state.view)
  const modal = useStoreModalState(state => state.modalView)
  const { scrollContainer, scrollRight, scrollLeft } = useHorizontalScroll()

  const { ref: homeRef, inView: homeInView } = useInView({ triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: djosRef, inView: djosInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: codesRef, inView: codesInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    }
  }, [modal])

  return (
    <>
      {view && <Intro />}
      {modal ? (
        <div className="relative h-dvh w-dvw overflow-hidden">
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto overflow-y-hidden h-dvh w-dvw"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div
              ref={homeRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}
            >
              {homeInView && <HomeLayer />}
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
              ref={projectsRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}>

              {projectsInView && <ProjectsLayer />}
            </div>
            <div
              ref={codesRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}>

              {codesInView && <CodesLayer />}
            </div>
            <div
              ref={contactRef}
              className="flex-shrink-0 h-dvh w-dvw"
              style={{ scrollSnapAlign: "start" }}>

              {contactInView && <ContactLayer />}
            </div>

          </div>
          <BtnContend onClick={scrollLeft} isLoR="l">
            <HiArrowSmallLeft size={20} className="fill-border " />
          </BtnContend>
          <BtnContend onClick={scrollRight} isLoR="r">
            <HiArrowSmallRight size={20} className="fill-border" />
          </BtnContend>
        </div>
      ) : (<SelectCodes />)
      }

    </>
  );
}


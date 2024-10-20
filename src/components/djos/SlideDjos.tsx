'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import {
  LogoCodeWars,
  LogoFreeCodeCamp,
  LogoFrontendMentor,
  LogoHackTheBox,
} from "@/components";

export const SlideDjos = () => {
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      contend: (<LogoCodeWars className="w-52" />),
    },
    {
      contend: (
        <Link
          href="https://www.freecodecamp.org/andresrw"
          target="_blank"
          className="m-2"
        >
          <LogoFreeCodeCamp className="w-52" />
        </Link>
      ),
    },
    {
      contend: (
        <Link
          href="https://www.frontendmentor.io/profile/amporabipo"
          target="_blank"
          className="m-2"
        >
          <LogoFrontendMentor className="w-52" />
        </Link>
      ),
    },
    {
      contend: (
        <Link href=" " target="_blank" className="m-2">
          <LogoHackTheBox className="w-52" />
        </Link>)
    }
  ];

  const handleClick = (index: any) => {
    setSlide(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide) => (slide + 1) % slides.length);
    }, 3000)

    return () => {
      clearInterval(interval);
    }
  }, [slides.length])

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-20 flex justify-center
      items-center">
        {slides.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                flex justify-center ${index === slide ? "opacity-100" : "opacity-0"
              }`}
          >
            {item.contend}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index === slide ? "border border-white/50" : "border border-white/80"
              }`}
            onClick={() => handleClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

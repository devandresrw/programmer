'use client'

import { useRef } from 'react'



export function useHorizontalScroll() {

  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      if (scrollContainer.current) {
        scrollContainer.current.scrollBy({
          left: -window.innerWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return {
    scrollContainer,
    scrollRight,
    scrollLeft,
  };
}
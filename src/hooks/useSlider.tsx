'use client'
import { ComponentType, useState } from "react";

export const useSlider = (components: ComponentType[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
    }
    const CurrentComponent = components[currentIndex];

    return { CurrentComponent, handleNext, handlePrev };
}
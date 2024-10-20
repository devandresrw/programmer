import { useState, useEffect } from "react";

interface hooksProps {
    numCom: number;
    interval?: number;
}

export const useProjectsSlider = ({ numCom, interval }: hooksProps) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((e) => (e + 1) % numCom)
    }
    const prev = () => {
        setCurrent((e) => (e - 1 + numCom) % numCom)
    }

    useEffect(() => {
        const timer = setInterval(next, interval);
        return () => clearInterval(timer); // Limpiar el temporizador al desmontar
    }, [interval]);

    return { current, next, prev, setCurrent }
}

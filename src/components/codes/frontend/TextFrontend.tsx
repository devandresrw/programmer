import { MarqueFrontend } from "@/components"

export const TextFrontend = () => {
    return (
        <div className="flex flex-col justify-center gap-6 ">
            <div className="text-white text-6xl
            font-extrabold font-jura tracking-tighter
            uppercase text-center">
                <h2>Frontend</h2>
                <h2>skills showcase</h2>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <p className="text-white font-rale font-light
                text-center text-lg
                mx-auto max-w-[30em]">
                    El mejor escenario para evaluar habilidades tecnicas
                    entorno al desarrollo es ver muestras de trabajos
                    o resoluciones de retos, a qui veras una coleccion
                    de trabajos realizados en el <b>frontend</b>.
                </p>
                <span className="inline-block text-center">Con las siguientes tecnologias</span>
            </div>
            <div className="">
                <MarqueFrontend />
            </div>
        </div>
    )
}
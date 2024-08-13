import { 
  LogoCodeWars, 
  LogoFreeCodeCamp, 
  LogoFrontendMentor, 
  LogoHackTheBox
 } from "./Logos";
import Link from "next/link"

export const TextDjos = () => {
  return (
    <div className="text-white flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-xl">Dojos tecnicos</h1>
        <p>
          Mi experiencia no solo fue adquirida mediante los cargos que he
          ocupado o de espacios académicos formales, mis habilidades más
          contundentes fueron entrenadas en los siguientes &#39;dojos&#39;, en
          donde mi algoritmia, mi conocimiento de front-end o de ciberseguridad
          fue entrenado aquí. Puedes verificar mis niveles en cada uno de ellos
          solo dando clic
        </p>
      </div>
      <div
        className=" flex flex-row items-center justify-center 
      flex-wrap  gap-5"
      >
        <Link href=" " className="m-2">
          <LogoCodeWars className="w-72" />
        </Link>
        <Link href=" " className="m-2">
          <LogoFreeCodeCamp className="w-72" />
        </Link>
        <Link href=" " className="m-2">
          <LogoFrontendMentor className="w-72" />
        </Link>
        <Link href=" " className="m-2">
          <LogoHackTheBox className="w-72" />
        </Link>
      </div>
    </div>
  );
};

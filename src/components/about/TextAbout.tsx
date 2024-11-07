"use client";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GlassTitle } from "../utils/GlassTitle";

export const TextAbout = () => {
  const [hover, setHover] = useState<string>("#f2f2f2");
  return (
    <GlassTitle
      title="Sobre mí"
      text="Soy desarrollador, trabajo creando aplicaciones web, 
        administrando servicios en la nube, y testeando infraestructura.
        gusto de desarrollar entornos interactivos y en la actualidad
        me interesa la web 3."
    >
      <ul className="flex justify-center gap-5">
        <li>
          <Link href={`https://www.linkedin.com/in/andresrw`} target="_blank">
            <FaLinkedin
              size={20}
              onMouseEnter={() => setHover("#c9c8c9")}
              onMouseLeave={() => setHover("#f2f2f2")}
              fill={hover}
            />
          </Link>
        </li>

        <li>
          <Link href={"https://x.com/andresrw_dev"} target="_blank">
            <FaXTwitter
              size={20}
              onMouseEnter={() => setHover("#c9c8c9")}
              onMouseLeave={() => setHover("#f2f2f2")}
              fill={hover}
            />
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.instagram.com/programmer.andresrw/"}
            target="_blank"
          >
            <FaInstagram
              size={20}
              onMouseEnter={() => setHover("#c9c8c9")}
              onMouseLeave={() => setHover("#f2f2f2")}
              fill={hover}
            />
          </Link>
        </li>
      </ul>
    </GlassTitle>
  );
};  );
};

import Link from "next/link"
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GlassTitle } from "../utils/GlassTitle";

export const TextAbout = () => {
    return (
      <GlassTitle
        title="Sobre mí"
        text="Soy desarrollador, trabajo creando aplicaciones web, 
        administrando servicios en la nube, y testeando infraestructura.
        Me gusta desarrollar entornos interactivos y en la actualidad
        me interesa la web 3."
      >
        <ul className="flex justify-center gap-3">
          <li>
            <Link href={`https://www.linkedin.com/in/andresrw`} target="_blank">
              <FaLinkedin size={30} fill="#f2f2f2" />
            </Link>
          </li>

          <li>
            <Link
              href={"https://www.instagram.com/programmer.andresrw/"}
              target="_blank"
            >
              <FaXTwitter size={30} fill="#f2f2f2" />
            </Link>
          </li>
          <li>
            <Link href={"https://x.com/andresrw_dev"} target="_blank">
              <FaInstagram size={30} fill="#f2f2f2" />
            </Link>
          </li>
        </ul>
      </GlassTitle>
    );
}
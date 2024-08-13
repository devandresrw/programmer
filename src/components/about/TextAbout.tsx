import Link from "next/link"
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";



export const TextAbout = () => {
    return (
      <div
        className="text-white text-center
       flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold">Sobre mí</h2>
        <p className="text-lg">
          Hola, soy desarrollador full stack, me enfoco en el desarrollo
          creativo y las aplicaciones web. He trabajado en diferentes áreas
          durante estos años, desde agencias de publicidad, instituciones
          educativas, bancos y organizaciones sin ánimo de lucro, en diferentes
          roles, como desarrollador, administrador de servidores o IT, he
          desarrollado entornos de realidad virtual, realidad aumentada y
          entornos interactivos.
        </p>
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
      </div>
    );
}
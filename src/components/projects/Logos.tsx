import Image from "next/image";
import Link from "next/link";

const LogoHumanias = () => {
    return(
        <Link href={'https://www.humanitasmuseum.art/'} target="_blank">
            <Image
            src="/logohumanitas.png"
            alt="Logo Humanias"
            width={200}
            height={200}
            />
        </Link>
    )
}
const LogoPoesia = () => {
    return(
        <Link href={'https://poesiaycodigo.art/'} target="_blank">
            <Image
            src="/logopoesia.png"
            alt="Logo Poesia"
            width={200}
            height={200}
            />
        </Link>   
    )
}
const LogoAgency = () => {
    return(
        <Link href={'https://1508.agency/'} target="_blank">
            <Image
            src="/logoagencia.png"
            alt="Logo Agency"
            width={150}
            height={150}
            /> 
        </Link> 
    )
}
const LogoCuartel = () => {
    return(
        <Link href={'https://www.cuarteldos.art/'} target="_blank">
            <Image
            src="/cuartel.png"
            alt="Logo Cuartel"
            width={200}
            height={200}
            />
        </Link> 
    )
}

export { LogoHumanias, LogoPoesia, LogoAgency, LogoCuartel }

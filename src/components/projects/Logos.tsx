import Image from "next/image";

const LogoHumanias = () => {
    return(
        <Image
            src="/logohumanitas.png"
            alt="Logo Humanias"
            width={200}
            height={200}
        />
    )
}
const LogoPoesia = () => {
    return(
        <Image
            src="/logopoesia.png"
            alt="Logo Poesia"
            width={200}
            height={200}
        />
    )
}
const LogoAgency = () => {
    return(
        <Image
            src="/logoagencia.png"
            alt="Logo Agency"
            width={150}
            height={150}
        />
    )
}
const LogoCuartel = () => {
    return(
        <Image
            src="/cuartel.png"
            alt="Logo Cuartel"
            width={200}
            height={200}
        />
    )
}

export { LogoHumanias, LogoPoesia, LogoAgency, LogoCuartel }

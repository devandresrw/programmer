import Image from "next/image";

const HumanitasProjects = () => {
  return (
    <div className="flex flex-col justify-center
    items-center">
      <div className="flex-1">
        <h2>Humanias Museum</h2>
        <p>Museo en de historia del arte
          en realidad virtual enfocado
          a la web
        </p>
      </div>
      <div className="flex-1">
        <Image 
          src={'/humanitas.svg'}
          width={150}
          height={50}
          alt="Humanitas museum"/>
      </div>
    </div>
  );
};
export default HumanitasProjects;
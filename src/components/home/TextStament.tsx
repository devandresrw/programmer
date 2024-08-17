import Image from "next/image";
export const TextStament = () => {
  return (
    <div
      className="flex flex-col 
    items-center justify-center gap-4"
    >
      <div>
        <Image src={"/logo.svg"} width={250} height={150} alt="asd" />
      </div>
      <div
        className="flex flex-col 
        items-center justify-center select-none font-jura
        text-center text-xl tracking-wider gap-2 ">
        <ul className="flex flex-col md:flex-row gap-2 ">
          <li>#WebMaster</li>
          <li>#WebDeveloper</li>
          <li>#CreativeDeveloper</li>
        </ul>
        <ul>
          <li>#CiberSegurity</li>
        </ul>
      </div>
    </div>
  );
};


import Image from "next/image";
export const TextStament = () => {
  return (
    <div className="flex flex-col 
    items-center justify-center gap-3">
      <div>
        <Image src={"/logo.svg"} width={250} height={150} alt="asd" />
      </div>
      <div className="text-white flex flex-col 
      items-center justify-center text-lg">
        <ul className="flex flex-col md:  text-center">
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


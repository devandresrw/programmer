import Image from "next/image";
export const TextStament = () => {
  return (
    <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-center
        items-center">
          <Image src={'/logo.svg'} 
          width={200} 
          height={150} 
          alt="Andrés R. W." 
          className="sm:w-80 "
          />
        </div>
        <div className="">
           <ul className="flex flex-row text-white
           justify-center items-center gap-5 sm:text-xl sm:font-medium">
             <li>#Web_Dev</li>
             <li>#HxC</li>
             <li>#Creative_Dev</li>
           </ul>
        </div>
    </div>
  );
};


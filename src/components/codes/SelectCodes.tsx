import {
  WrapperFrontend, WrapperBackend,
  TextBackend, TextFrontend
} from "@/components";
import { useSelectCodes } from "@/stores";

export const SelectCodes = () => {
  const { selectCodes } = useSelectCodes();
  return (
    <div className="w-dvw h-dvh flex flex-col items-center py-5">
      <div className="">
        {selectCodes ? (<TextFrontend />) : (<TextBackend />)}
      </div>
      <div className="">
        {selectCodes ? <WrapperFrontend /> : <WrapperBackend />}
      </div>
    </div>
  );
};


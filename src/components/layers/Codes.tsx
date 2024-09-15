import {
    BackScene,
    GlassContainer,
    Box,
} from "@/components"
import { WrapperCodes } from "../codes/works"

const CodesLayer = () => {
    return(
        <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <Box />
      </BackScene>
      <GlassContainer>
         <WrapperCodes/>
      </GlassContainer>
    </div>
    )
}

export default CodesLayer
import {
  BackScene,
  GlassContainer,
  Box,
} from "@/components"
import { WrapperCodes } from "../codes/works"
import { EffecComposerCodes } from "../codes/EffectComposer"
import { Ring } from "../utils/geometries/Right"

const CodesLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <EffecComposerCodes />
        <Ring
          numx={0.0}
          numy={0.0}
          numz={0.00}
          innerRadius={5}
          outerRadius={10}
          thetaSegments={10}
          phiSegments={1}
          position={[0, 0, -5]}
        />
      </BackScene>
      <GlassContainer>
        <WrapperCodes />
      </GlassContainer>
    </div>
  )
}

export default CodesLayer
import {
  BackScene,
  GlassContainer,
  WrapperCodes,
  EffecComposerCodes,
  Ring
} from "@/components"

export const CodesLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <EffecComposerCodes />
        <Ring
          numx={0.02}
          numy={0.02}
          numz={0.00}
          innerRadius={5}
          outerRadius={5.5}
          thetaSegments={40}
          phiSegments={5}
          rotation={[4, 4, 5]}
          position={[-12, 0, -6]}
        />
        <Ring
          numx={0.01}
          numy={0.01}
          numz={0.00}
          innerRadius={5}
          outerRadius={5.5}
          thetaSegments={40}
          phiSegments={5}
          rotation={[0, 0, 0]}
          position={[-12, 0, -6]}
        />
        <Ring
          numx={0.02}
          numy={0.02}
          numz={0.00}
          innerRadius={5}
          outerRadius={5.5}
          thetaSegments={40}
          phiSegments={5}
          rotation={[4, 4, 5]}
          position={[0, 7, -6]}
        />
        <Ring
          numx={0.03}
          numy={0.03}
          numz={0.00}
          innerRadius={5}
          outerRadius={5.5}
          thetaSegments={40}
          phiSegments={5}
          rotation={[0, 0, 0]}
          position={[0, 7, -6]}
        />
        <Ring
          numx={0.01}
          numy={0.03}
          numz={0.00}
          innerRadius={5}
          outerRadius={5.5}
          thetaSegments={40}
          phiSegments={5}
          rotation={[4, 4, 5]}
          position={[12, 0, -6]}
        />
        <Ring
          numx={0.005}
          numy={0.02}
          numz={0.00}
          innerRadius={5}
          outerRadius={5.5}
          thetaSegments={40}
          phiSegments={5}
          rotation={[0, 0, 0]}
          position={[12, 0, -6]}
        />
        <Ring
          numx={0.04}
          numy={0.002}
          numz={0.00}
          innerRadius={5}
          outerRadius={5.5}
          thetaSegments={40}
          phiSegments={5}
          rotation={[4, 4, 5]}
          position={[0, -7, -6]}
        />
        <Ring
          numx={0.03}
          numy={0.004}
          numz={0.00}
          innerRadius={5}
          outerRadius={5.5}
          thetaSegments={40}
          phiSegments={5}
          rotation={[0, 0, 0]}
          position={[0, -7, -6]}
        />

      </BackScene>
      <GlassContainer>
        <WrapperCodes />
      </GlassContainer>
    </div>
  )
}


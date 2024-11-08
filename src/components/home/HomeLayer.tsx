import { Suspense } from "react";
import {
  BackScene,
  GlassContainer,
  Torus,
  TextStament,
  HomeScene
} from "@/components"

export const HomeLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center">
      <Suspense fallback={null}>
        <BackScene>
          <Torus numx={0.000} numy={0.000}
            numz={0.003}
            size={[8, 6, 20, 20]}
            position={[0, 0, -10]} />
        </BackScene>
      </Suspense>
      <Suspense fallback={null}>
        <GlassContainer>
          <TextStament />
          <Suspense fallback={null}>
            <HomeScene />
          </Suspense>
        </GlassContainer>
      </Suspense>

    </div>
  );
}
import { Suspense } from "react";
import {
  BackScene,
  GlassContainer,
  Torus,
  TextStament,
  HomeScene,
  Loading
} from "@/components"

export const HomeLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center">
      <Suspense fallback={<Loading />}>
        <BackScene>
          <Suspense fallback={<Loading />}>
            <Torus numx={0.000} numy={0.000}
              numz={0.03}
              size={[8, 6, 20, 20]}
              position={[0, 0, -10]} />
          </Suspense>
        </BackScene>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <GlassContainer>
          <TextStament />
          <Suspense fallback={<Loading />}>
            <HomeScene />
          </Suspense>
        </GlassContainer>
      </Suspense>
    </div>
  );
}
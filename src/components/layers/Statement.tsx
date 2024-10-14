import {
  BackScene,
  GlassContainer,
  Torus,
  TextStament,
  StamentScene
} from "@/components"

export default function StatementLayer() {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center">
      <BackScene>
        <Torus numx={0.000} numy={0.000}
          numz={0.003}
          size={[8, 6, 20, 20]}
          position={[0, 0, -10]} />
      </BackScene>
      <GlassContainer>
        <TextStament />
        <StamentScene />
      </GlassContainer>
    </div>
  );
}
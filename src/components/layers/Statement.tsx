import { 
    BackScene, 
    GlassContainer,
    Box,
    TextStament,
    StamentScene
 } from "@/components"


export default function StatementLayer () {
    return (
      <div
        className="relative h-dvh w-dvw flex 
        justify-center items-center">
        <BackScene>
            <Box />
        </BackScene>
        <GlassContainer>
          <TextStament />
          <StamentScene/>
        </GlassContainer>
      </div>
    );
}
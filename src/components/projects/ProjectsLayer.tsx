import {
  BackScene,
  GlassContainer,
  EffectComposerProjects,
  Cone,
  WrapperProjects

} from "@/components";

export const ProjectsLayer = () => {
  return (
    <div
      className="relative h-dvh w-dvw flex 
        justify-center items-center"
    >
      <BackScene>
        <EffectComposerProjects />
        <Cone numx={0} numy={0.001} numz={0.00}
          radius={8} height={9} radialSegments={40}
          position={[8, -4, -1]}
          rotation={[0, 0, 0]} />
        <Cone numx={0} numy={0.001} numz={0.00}
          radius={8} height={9} radialSegments={40}
          position={[8, 4, -1]}
          rotation={[0, 0, Math.PI]} />
        <Cone numx={0} numy={0.001} numz={0.00}
          radius={8} height={9} radialSegments={40}
          position={[-8, -4, -1]}
          rotation={[0, 0, 0]} />
        <Cone numx={0} numy={0.001} numz={0.00}
          radius={8} height={9} radialSegments={40}
          position={[-8, 4, -1]}
          rotation={[0, 0, Math.PI]} />

      </BackScene>
      <GlassContainer>
        <WrapperProjects />
      </GlassContainer>
    </div>
  );
};

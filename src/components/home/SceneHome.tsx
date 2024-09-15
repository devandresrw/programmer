
import { Canvas, } from "@react-three/fiber";

export const StamentScene = () => {
  return (
    <div className="w-44 h-48 mt-5 border border-white/50
    rounded-lg sm:w-[50vw] sm:h-[55vw] sm:p-30
    lg:w-[30vw] lg:h-[20vw]">
      <Canvas camera={{position: [0,0,5], fov:75}}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="white" />
      </Canvas>
    </div>
  );
};



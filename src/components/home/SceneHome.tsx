
import { Canvas, } from "@react-three/fiber";

export const StamentScene = () => {
  return (
    <div className="w-50 h-60 mt-10 border border-white/50
    rounded-lg lg:w-1/2">
      <Canvas camera={{position: [0,0,5], fov:75}}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="white" />
      </Canvas>
    </div>
  );
};



import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const Box = () => {
  const box = useRef<Mesh>(null!);
  const { gl } = useThree();

  useEffect(() => {
    gl.setClearColor("black");
  }, [gl]);

  useFrame(() => {
    if (box.current) {
      box.current.rotation.x += 0.01;
      //box.current.rotation.y += 0.01
    }
  });

  return (
    <mesh ref={box} position={[0, -5, 0]}>
      <meshBasicMaterial wireframe />
      <boxGeometry args={[2, 2, 2]} />
    </mesh>
  );
};

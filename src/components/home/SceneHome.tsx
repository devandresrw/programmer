import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Tetrahedron } from "@react-three/drei";
import {Mesh} from "three";
import { ShaderMaterial, Vector2 } from "three";
import { Dodecahedron } from "@/components";

export const StamentScene = () => {
  return (
    <div className="w-2/3 h-2/4 mt-10">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="white" />
        <OrbitControls />
        <Dodecahedron />
      </Canvas>
    </div>
  );
};


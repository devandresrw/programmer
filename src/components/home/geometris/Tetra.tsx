import { DodecahedronGeometry } from "three";

export const Dodecahedron = () => {
    return (
      <mesh>
        <dodecahedronGeometry args={[3, 0]} />
        <meshPhysicalMaterial
          color="hotpink"
          roughness={0.5}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    );
}
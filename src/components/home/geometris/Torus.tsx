import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

export const Torus = () => {
    const meshRef = useRef<Mesh>(null)

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.z += 0.01
        }
    })

    return (
        <mesh ref={meshRef} position={[0, -1, -7]} rotation={[20.5, 0, 0]}>
            <torusGeometry args={[8, 5, 40, 60]} />
            <meshBasicMaterial wireframe />
        </mesh>
    )
}
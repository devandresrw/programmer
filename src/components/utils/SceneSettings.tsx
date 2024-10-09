import { OrthographicCamera } from '@react-three/drei'

export const SceneSttings = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={1} />
            <directionalLight position={[0, 0, 0]} intensity={1} castShadow />
        </>
    )
}
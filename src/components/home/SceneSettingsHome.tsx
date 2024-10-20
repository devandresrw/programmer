
export const SceneSettingsHome = () => {
    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <pointLight position={[-5, -5, -5]} intensity={0.8} color="white" />
        </>
    )
}
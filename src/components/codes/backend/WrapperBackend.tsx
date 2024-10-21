import { useStoreModalState } from "@/stores"



export const WrapperBackend = () => {
    const { modalView, setModalView } = useStoreModalState()
    return (
        <div className="">
            <h1 onClick={() => { setModalView(true) }}
                className="text-white">Backend</h1>
        </div>
    )
}
import { useStoreModalState } from "@/stores"

export const WrapperFrontend = () => {
    const { modalView, setModalView } = useStoreModalState()
    return (
        <div className="">
            <h1 onClick={() => { setModalView(true) }}
                className="text-white">Frontend</h1>
        </div>
    )
}
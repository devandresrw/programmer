import { create } from "zustand";

interface ModalState {
    modalView: boolean;
    setModalView: (view: boolean) => void;
}

export const useStoreModalState = create<ModalState>((set) => ({
    modalView: true,
    setModalView: (view) => set({ modalView: view }),
}))
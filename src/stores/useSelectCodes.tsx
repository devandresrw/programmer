import { create } from 'zustand';

interface SelectCodes {
    selectCodes: boolean;
    setSelectCodes: (codes: boolean) => void;
}
export const useSelectCodes = create<SelectCodes>((set) => ({
    selectCodes: true,
    setSelectCodes: (codes) => set({ selectCodes: codes }),
}))
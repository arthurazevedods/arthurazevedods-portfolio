import { create } from 'zustand'

type RadioStore = {
  selected: number;
  setSelected: (value: number) => void;
};

export const useRadioStore = create<RadioStore>((set) => ({
  selected: 1,
  setSelected: (value) => set({ selected: value }),
}));
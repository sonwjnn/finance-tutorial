import { create } from "zustand";

interface NewAccountProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNewAccount = create<NewAccountProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

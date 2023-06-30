import { create } from "zustand";

interface ApplyModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useApplyJobModal = create<ApplyModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useApplyJobModal;

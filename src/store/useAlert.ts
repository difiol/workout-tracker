import { create } from "zustand";

interface Options {
  title?: string;
  description?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
};

type AlertStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
  displayAlert: (options: Options) => void;
} & Options;


export const useAlertStore = create<AlertStore>()((set) => ({
  open: false,
  onConfirm: () => {},
  setOpen: (open) => set({ open }),
  displayAlert: (options) => set({ ...options, open: true }),
}));

export const useAlert = () => {
  const { displayAlert } = useAlertStore();

  return {
    displayAlert: (options: Options) => displayAlert(options),
  };
};
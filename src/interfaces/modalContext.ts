export interface IModalContext {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  textModal: string;
  setTextModal: (value: string) => void;
  confirmAction: () => void;
  setConfirmAction: (value: () => void) => void;
}
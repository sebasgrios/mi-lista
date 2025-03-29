export interface IModalContext {
  loaderModal: boolean;
  setLoaderModal: (value: boolean) => void;
  customModal: {
    visibility: boolean;
    text: string;
    confirmAction: () => void;
  };
  setCustomModal: (value: {
    visibility: boolean;
    text: string;
    confirmAction: () => void;
  }) => void;
}
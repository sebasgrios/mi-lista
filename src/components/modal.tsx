"use client";

import { useModalContext } from "@/context/ModalContext";

const Modal = () => {
  const { openModal, setOpenModal, textModal, confirmAction } = useModalContext();

  return (
    openModal && (
      <div
        className="fixed flex items-center justify-center inset-0 z-50 bg-black/50 dark:bg-white/25 px-4"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setOpenModal(false);
          }
        }}
      >
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg shadow-lg bg-white dark:bg-black max-w-full md:max-w-md">
          <div className="flex items-center justify-end w-full">
            <button
              className="text-4xl px-2 rounded-lg select-none"
              onClick={() => setOpenModal(false)}
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 px-6 pb-6">
            <p className="pr-6 text-md">
              {textModal}
            </p>
            <button
              className="flex items-center justify-center text-md rounded-lg border px-6 py-2 hover:bg-black/10 dark:hover:bg-white/10"
              onClick={confirmAction}
            >
              Continuar
            </button>
          </div>
        </div>
      </div >
    )
  );
};

export default Modal;
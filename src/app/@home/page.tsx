"use client";

import { useModalContext } from "@/context/ModalContext";
import GoogleButton from "@/components/google-button";

const HomePage = () => {
  const { setOpenModal, setTextModal, setConfirmAction } = useModalContext();

  return (
    <div className="h-svh flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl">¡Bienvenido a tu lista!</h1>
        <p className="text-lg">Crea tu lista de manera fácil y sencilla.</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <GoogleButton
          onClick={() => {
            console.log("Redirecting to Google...");
          }}
        />
        <button
          onClick={() => {
            setTextModal("Si continuas como invitado, tus tareas permanecerán un máximo de 7 días y solo tendrás acceso a una lista.");
            setOpenModal(true);
            setConfirmAction(() => () => {
              console.log("Redirecting to task...");
              setOpenModal(false);
            });
          }}
        >
          Continuar como invitado
        </button>
      </div>
    </div >
  );
};

export default HomePage;
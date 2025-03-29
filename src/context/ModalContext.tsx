"use client";

import { IModalContext } from "@/interfaces/modalContext";
import { createContext, useContext, useState, ReactNode } from "react";

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);
  const [textModal, setTextModal] = useState("");
  const [confirmAction, setConfirmAction] = useState<() => void>(() => () => { });

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal, textModal, setTextModal, confirmAction, setConfirmAction }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
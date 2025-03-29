"use client";

import { IModalContext } from "@/interfaces/modalContext";
import { createContext, useContext, useState, ReactNode } from "react";

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [loaderModal, setLoaderModal] = useState(false);
  const [customModal, setCustomModal] = useState({ visibility: false, text: "", confirmAction: () => { } });

  return (
    <ModalContext.Provider value={{ loaderModal, setLoaderModal, customModal, setCustomModal }}>
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
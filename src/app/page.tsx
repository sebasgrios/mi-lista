"use client";

import { useMemo } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { createTheme } from "@mui/material";
import StoreProvider from "./StoreProvider";
import { ThemeProvider } from "@emotion/react";
import { ModalProvider } from "@/context/ModalContext";
import LoaderModal from "@/components/loader-modal";
import CustomModal from "@/components/custom-modal";
import HomePage from "./@home/page";
import ListPage from "./@list/page";

export default function Home() {
  const { darkMode } = useDarkMode();
  const isLogging = false;

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    },
    typography: {
      fontFamily: [
        "Nunito"
      ].join(',')
    }
  }),
    [darkMode]);

  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <LoaderModal />
          <CustomModal />
          {isLogging ? <ListPage /> : <HomePage />}
        </ModalProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

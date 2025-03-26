"use client";

import { useMemo } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { createTheme } from "@mui/material";
import StoreProvider from "./StoreProvider";
import { ThemeProvider } from "@emotion/react";
import ListPage from "./@list/page";

export default function Home() {
  const { darkMode } = useDarkMode();

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
        <ListPage />
      </ThemeProvider>
    </StoreProvider>
  );
}

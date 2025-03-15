"use client";

import { useMemo } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import ListPage from "./@list/page";

export default function Home() {
  const { darkMode } = useDarkMode();

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  }),
    [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <ListPage />
    </ThemeProvider>
  );
}

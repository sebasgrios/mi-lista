"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

export const useDarkMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode])

  return { darkMode, setDarkMode };
};
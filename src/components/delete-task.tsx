"use client";

import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { deleteTask } from "@/lib/features/list-slice";
import { useDarkMode } from "@/hooks/useDarkMode";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const getStyle = (isDarkMode: boolean) => isDarkMode ? {
  color: "gray",
  borderRadius: "0.5rem",
  "&:hover": {
    color: "white",
    backgroundColor: "transparent"
  }
} : {
  color: "gray",
  borderRadius: "0.5rem",
  "&:hover": {
    color: "black",
    backgroundColor: "transparent"
  }
};

const DeleteTaskButton = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const { darkMode } = useDarkMode();

  const [confirmDelete, setConfirmDelete] = useState(false);

  let timeout: NodeJS.Timeout;
  const interval = 2500;

  const sx = getStyle(darkMode);

  return <div className="flex justify-end items-center gap-2">
    {!confirmDelete ? (
      <IconButton
        aria-label="Eliminar"
        disableRipple
        onClick={() => {
          setConfirmDelete(true);
        }}
        sx={sx}
      >
        <DeleteIcon />
      </IconButton>
    ) : (
      <IconButton
        aria-label="Eliminar"
        disableRipple
        onClick={() => {
          dispatch(deleteTask(id));
        }}
        onMouseEnter={() => {
          clearTimeout(timeout);
        }}
        onMouseLeave={() => {
          timeout = setTimeout(() => setConfirmDelete(false), interval);
        }}
        sx={{
          color: "#b00",
          borderRadius: "0.5rem",
          "&:hover": {
            color: "red",
            backgroundColor: "transparent"
          }
        }}
      >
        <DeleteIcon />
      </IconButton>
    )}
  </div>
};

export default DeleteTaskButton;
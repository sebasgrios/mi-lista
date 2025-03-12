"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { deleteTask } from "@/lib/features/list-slice";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const DeleteTaskButton = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (confirmDelete) {
      setTimeout(() => setConfirmDelete(false), 2500);
    }
  }, [confirmDelete])

  return <div className="flex justify-end items-center gap-2">
    {!confirmDelete ? (
      <IconButton
        aria-label="Eliminar"
        disableRipple
        onClick={() => {
          setConfirmDelete(true);
        }}
        sx={{
          color: "gray",
          borderRadius: "0.5rem",
          "&:hover": {
            color: "black",
            backgroundColor: "transparent"
          }
        }}
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
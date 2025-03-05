"use client";

import { useAppDispatch } from "@/lib/hooks";
import { addTask } from "@/lib/features/listSlice";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddTaskButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      color="inherit"
      disableRipple
      fullWidth
      onClick={() => {
        dispatch(addTask());
      }}
      sx={{
        color: "gray",
        "&:hover": {
          color: "black",
          backgroundColor: "transparent",
          fontWeight: "bold"
        }
      }}
    >
      <AddIcon />
      <span className="text-lg">Añadir</span>
    </Button>
  );
};

export default AddTaskButton;
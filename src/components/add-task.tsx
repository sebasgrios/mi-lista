"use client";

import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from "@/lib/hooks";
import { addTask } from "@/lib/features/listSlice";

const AddTaskButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      color="inherit"
      fullWidth
      onClick={() => {
        dispatch(addTask());
      }}
    >
      <AddIcon />
      <span className="font-medium">Añadir</span>
    </Button>
  );
};

export default AddTaskButton;
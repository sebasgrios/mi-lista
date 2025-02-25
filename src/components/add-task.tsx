"use client";

import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddTaskButton = () => {
  return (
    <Button
      color="inherit"
      fullWidth
      onClick={() => {
        console.log(`Añadir nuevo campo a la lista`);
      }}
    >
      <AddIcon />
      <span className="font-medium">Añadir</span>
    </Button>
  );
};

export default AddTaskButton;
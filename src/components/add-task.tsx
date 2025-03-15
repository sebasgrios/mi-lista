"use client";

import { useAppDispatch } from "@/lib/hooks";
import { addTask } from "@/lib/features/list-slice";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const getStyle = (isDarkMode: boolean) => isDarkMode ? {
  color: "gray",
  "&:hover": {
    color: "white",
    backgroundColor: "transparent",
  }
} : {
  color: "gray",
  "&:hover": {
    color: "black",
    backgroundColor: "transparent",
  }
};

const AddTaskButton = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useDarkMode();
  const sx = getStyle(darkMode);

  return (
    <Button
      color="inherit"
      disableRipple
      fullWidth
      onClick={() => {
        dispatch(addTask());
      }}
      sx={sx}
    >
      <AddIcon />
      <span className="text-lg">Añadir</span>
    </Button>
  );
};

export default AddTaskButton;
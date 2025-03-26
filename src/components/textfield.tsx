"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { TextField as MuiTextField } from "@mui/material";

const getStyle = (isDarkMode: boolean) => isDarkMode ? {
  ".MuiInput-root::before": {
    border: "none"
  },
  ".MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottom: "1px solid gray",
    transition: "none"
  },
  ".MuiInput-root::after": {
    borderBottom: "2px solid white"
  },
  ".MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "white",
    textDecoration: "line-through"
  },
  ".MuiInput-root.Mui-disabled:before": {
    borderBottomStyle: "none"
  },
  ".MuiInput-input": {
    textOverflow: "ellipsis"
  }
} : {
  ".MuiInput-root::before": {
    border: "none"
  },
  ".MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottom: "1px solid gray",
    transition: "none"
  },
  ".MuiInput-root::after": {
    borderBottom: "2px solid black"
  },
  ".MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "black",
    textDecoration: "line-through"
  },
  ".MuiInput-root.Mui-disabled:before": {
    borderBottomStyle: "none"
  },
  ".MuiInput-input": {
    textOverflow: "ellipsis"
  }
};

const TextField = ({
  description,
  input,
  disable,
  onChange,
  onKeyDown
}: {
  description: string,
  input: string,
  disable: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyDown: (event: React.KeyboardEvent) => void
}) => {
  const { darkMode } = useDarkMode();

  const sx = getStyle(darkMode);

  return <MuiTextField
    autoFocus={description.length === 0}
    disabled={disable}
    fullWidth
    onChange={onChange}
    onKeyDown={onKeyDown}
    sx={sx}
    value={input}
    variant="standard"
  />
};

export default TextField;
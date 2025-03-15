import { useDarkMode } from "@/hooks/useDarkMode";
import { Checkbox as MuiCheckbox } from "@mui/material";

const getStyle = (isDarkMode: boolean) => isDarkMode ? {
  color: "gray",
  borderRadius: "0.5rem",
  "&:hover": {
    color: "white",
    backgroundColor: "transparent"
  },
  "&.Mui-checked": {
    color: "white"
  }
} : {
  color: "gray",
  borderRadius: "0.5rem",
  "&:hover": {
    color: "black",
    backgroundColor: "transparent"
  },
  "&.Mui-checked": {
    color: "black"
  }
};

const Checkbox = ({ checked, onClick }: { checked: boolean, onClick: () => void }) => {
  const { darkMode } = useDarkMode();

  const sx = getStyle(darkMode);

  return <MuiCheckbox
    checked={checked}
    disableRipple
    onClick={onClick}
    sx={{ ...sx }}
  />
};

export default Checkbox;
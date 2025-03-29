import { useModalContext } from "@/context/ModalContext";
import { useDarkMode } from "@/hooks/useDarkMode";
import { CircularProgress as Loader } from "@mui/material";

const getStyle = (isDarkMode: boolean) => isDarkMode ? {
  color: "white"
} : {
  color: "white"
};

const LoaderModal = () => {
  const { darkMode } = useDarkMode();
  const { loaderModal } = useModalContext();

  const sx = getStyle(darkMode);

  return (
    loaderModal && (
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 dark:bg-white/25 z-50">
        <Loader size={60} sx={{ ...sx }} />
      </div>
    )
  );
};

export default LoaderModal;
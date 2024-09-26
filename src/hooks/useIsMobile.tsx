import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function useIsMobile() {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("lg"));
  return media;
}

export default useIsMobile;

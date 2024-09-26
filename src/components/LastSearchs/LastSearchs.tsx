import { Box } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import CustomTypography from "../CustomTypography/CustomTypography";
import LastSearchItem from "./components/LastSearchItem";
import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const LastSearchs = () => {
  const isMobile = useIsMobile();
  const searchHistory = useSelector((state: RootState) => state.weather.history);
  if (!searchHistory.length) return;
  return (
    <>
      <CustomTypography 
        text="Últimas busquedas"
        weight={600}
        props={{ fontSize: "1.5rem" }}
      />
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        gap="1rem"
        position="relative"
        top={isMobile ? "-3rem" : "-4.5rem"}
      >
        {searchHistory.map((el) => (
          <LastSearchItem 
            city={el.city}
            key={`key--${el.city}`}
          />
        ))}
      </Box>
    </>
  );
};

export default memo(LastSearchs);
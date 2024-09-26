import { Box, styled, useTheme } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Header from "../components/Header/Header";
import EmptyState from "../components/EmptyState/EmptyState";
import CurrentWeatherContainer from "../components/CurrentWeatherContainer/CurrentWeatherContainer";
import ForecastTable from "../components/ForecastTable/ForecastTable";
import LastSearchs from "../components/LastSearchs/LastSearchs";

const StyledBox = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: calc(100vw - 3rem);
  height: 100vh;
  padding: 1.5rem;
  overflow-x: hidden;
  ${theme.breakpoints.up("lg")}{
    padding: 1rem 2rem;
    width: calc(100vw - 4rem);
    gap: 6rem;  
  }
`);

const StyledContent = styled(Box)(
  ({ theme }) =>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${theme.breakpoints.up("lg")}{
    flex-direction: row;
    justify-content: space-around;
  }
`);

const MainLayout = () => {
  const theme = useTheme();
  const historySearch = useSelector((state: RootState) => state.weather.history);
  return (
    <StyledBox
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Header />
        <StyledContent>
          {(!historySearch.length ||  historySearch[0].error) ? 
            <EmptyState hasSearchs={!!historySearch.length} city={historySearch[0]?.city} />
          :
            <>
              <CurrentWeatherContainer />
              <ForecastTable />
            </>
          } 
        </StyledContent>
        <LastSearchs />
    </StyledBox>
  );
};

export default memo(MainLayout);
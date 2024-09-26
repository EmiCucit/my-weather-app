import { Box, styled } from '@mui/material';
import { memo } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import DataItem from './components/DataItem';
import CustomTypography from '../CustomTypography/CustomTypography';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CustomIcon from './components/CustomIcon';
import formatWeather from '../../utils/helpers/formatWeather';
import Loader from '../Loader/Loader';

const StyledBox = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  ${theme.breakpoints.up('lg')}{
    flex-direction: row;
    max-width: 50%;
    justify-content: space-between; 
  };
`);

const StyledInfoBox = styled(Box)(
  ({ theme }) => `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  gap: 0.75rem;
  ${theme.breakpoints.up('lg')}{
    width: 60%;
    gap: 0.5rem;
    justify-content: flex-start;
  }
`);

const CurrentWeatherContainer = () => {
  const isMobile = useIsMobile();
  const { weatherData, city } = useSelector((state: RootState) => state.weather.history[0] || {});
  const { loading } = useSelector((state: RootState) => state.weather );
  if (!weatherData) return;
  if (loading) return <Loader />;
  const handleSize = (val: boolean) => {
    if (val) {
      return "10rem";
    }
    return "12rem";
  };
  return (
    <StyledBox>
      <Box
        display="flex"
        flexDirection={isMobile ? "row" : "column"}
        alignItems={isMobile ? "center" : "baseline"}
        gap={isMobile ? "3rem" : 0}
        height="100%"
      >
        <CustomIcon 
          data-testid="custom-icon"
          variant={weatherData.weather}
          props={{ sx: { width: handleSize(isMobile), height: handleSize(isMobile) }}}
        />
        <Box marginTop={isMobile ? "0" : "1.5rem"} data-testid="main-info-box">
          <CustomTypography 
            text={formatWeather(weatherData.weather)}
            variant='secondary'
            weight={600}
            props={{ fontSize: "1.5rem" }}  
          />
          <CustomTypography 
            data-testid="custom-typography-city"
            text={city}
            variant='primary'
            weight={600}
            props={{ sx: { width: `${isMobile ? "10rem" : "12rem"}` }}}
          />
        </Box>
      </Box>
      <StyledInfoBox data-testid="weather-detail-box">
        <DataItem 
          data-testid="dataitem-temp"
          itemField='Temperatura'
          itemValue={`${Math.floor(weatherData.temperature)}°C`}
        />
        <DataItem 
          data-testid="dataitem-sens"
          itemField='Sens. térmica'
          itemValue={`${Math.floor(weatherData.feelsLike)}°C`}
        />
        <DataItem
          data-testid="dataitem-wind"
          itemField='Viento'
          itemValue={`${Math.floor(weatherData.wind)} km/h`}
        />
        <DataItem 
          data-testid="dataitem-humidity"
          itemField='Humedad'
          itemValue={`${weatherData.humidity}%`}
        />
        <DataItem 
          data-testid="dataitem-pressure"
          itemField='Presión'
          itemValue={`${weatherData.pressure} hPa`}
        />
      </StyledInfoBox>
    </StyledBox>
  );
};

export default memo(CurrentWeatherContainer);
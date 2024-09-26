import { createFilterOptions } from "@mui/material";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import useWeather from "../../../services/useWeather";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { addSearch } from "../../../store/slice/weatherSlice";
import useForecast from "../../../services/useForecats";

interface Cities {
  city: string;
  value: string;
  alias?: string | string[];
}

const useAutocomplete = () => {
  const [open, setOpen] = useState(false);
  const [auxCity, setAuxCity] = useState<string | undefined>("");
  const dispatch = useDispatch();
  const searchHistory = useSelector((state: RootState) => state.weather.history);
  
  const filterOptions = createFilterOptions({
    stringify: (option: Cities) => {
      const aliasStr = Array.isArray(option.alias) ? option.alias.join(' ') : option.alias || '';
      return `${option.city} ${aliasStr}`;
    }
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const { fetchWeather, weatherData, error: weatherError } = useWeather();
  const { fetchForecast, forecastData, error: forecastError } = useForecast();
  
  useEffect(() => {
    if (!auxCity) return;
    if (auxCity) {
      if (weatherError || forecastError) {
        dispatch(addSearch({
          city: auxCity,
          error: true,
        }));
      } else if (weatherData && forecastData) {
        dispatch(addSearch({
          city: auxCity,
          weatherData,
          forecastData,
        }));
      }
    }
  }, [auxCity, dispatch, forecastData, forecastError, weatherData, weatherError]);

  const handleSelection = useCallback(async (_event: SyntheticEvent<Element, Event>, value: Cities | null) => {
    if (value) {
      setAuxCity(value.city);
      const existingSearch = searchHistory.find(item => item.city === value.value);
      if (!existingSearch || existingSearch.error) {
        try {
          await fetchWeather(value.value);
          await fetchForecast(value.value);
        } catch (error) {
          console.error("Error en la obtención de datos:", error);
        }
      }
    }
  }, [fetchForecast, fetchWeather, searchHistory]);

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleSelection,
    filterOptions,
    handleOpen,
    handleClose,
  };
};

export default useAutocomplete;

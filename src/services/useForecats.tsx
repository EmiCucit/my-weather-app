import { useState } from "react";
import axios from "axios";
import { OPENWEATHER_API_KEY, BASE_URL } from "./api.constans";
import { ForecastData, setLoading, TWeather } from "../store/slice/weatherSlice";
import { useDispatch } from "react-redux";

interface WeatherReading {
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: {
    main: string;
  }[];
}

interface ForecastApiResponse {
  list: WeatherReading[];
}

const useForecast = () => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const fetchForecast = async (city: string) => {
    dispatch(setLoading(true));
    setError(null);

    try {
      const response = await axios.get<ForecastApiResponse>(
        `${BASE_URL}/forecast?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );

      const groupedData: Record<string, WeatherReading[]> = response.data.list.reduce(
        (acc: Record<string, WeatherReading[]>, reading: WeatherReading) => {
          const date = reading.dt_txt.split(" ")[0];
          if (!acc[date]) acc[date] = [];
          acc[date].push(reading);
          return acc;
        },
        {}
      );

      const parsedForecast = Object.keys(groupedData).map((date) => {
        const dayData = groupedData[date];

        const maxTemp = Math.max(...dayData.map((entry) => entry.main.temp_max));
        const minTemp = Math.min(...dayData.map((entry) => entry.main.temp_min));

        return {
          date,
          maxTemp,
          minTemp,
          weather: dayData[0].weather[0].main as TWeather,
        };
      });

      setForecastData(parsedForecast);
    } catch (err) {
      setError("No se pudo obtener la previsión del clima.");
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { forecastData, error, fetchForecast };
};

export default useForecast;

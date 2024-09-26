import { useState } from "react";
import axios from "axios";
import { OPENWEATHER_API_KEY, BASE_URL } from "./api.constans";
import { setLoading, WeatherData } from "../store/slice/weatherSlice";
import { useDispatch } from "react-redux";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    dispatch(setLoading(true));
    setError(null);
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );
      const data = response.data;
      
      const parsedData: WeatherData = {
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weather: data.weather[0].main,
        wind: data.wind.speed,
      };

      setWeatherData(parsedData);
    } catch (err) {
      setError("No se pudo obtener la información del clima.");
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { weatherData, error, fetchWeather };
};

export default useWeather;

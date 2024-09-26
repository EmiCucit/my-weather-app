import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TWeather = "Clear" | "Clouds" | "Rain" | "Dizzle" | "Thunderstorm" | "Snow" | "Mist" | "Smoke" | "Haze" | "Dust" | "Fog" | "Sand" | "Ash" | "Squall" | "Tornado"

export interface WeatherData {
  temperature: number;
  feelsLike: number;
  weather: TWeather;
  humidity: number;
  pressure: number;
  wind: number;
}

export interface ForecastData {
  date: string;
  maxTemp: number;
  minTemp: number;
  weather: TWeather;
}

interface SearchState {
  history: {
    city: string;
    weatherData?: WeatherData;
    forecastData?: ForecastData[];
    error?: boolean;
  }[];
  loading: boolean;
}

const initialState: SearchState = {
  history: [],
  loading: false,
};

const weatherSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<{ city: string; weatherData?: WeatherData; forecastData?: ForecastData[]; error?: boolean }>) => {
      state.history = [
        action.payload,
        ...state.history.filter(item => item.city !== action.payload.city)
      ].slice(0, 5);
    },
    moveToTop: (state, action: PayloadAction<string>) => {
      const item = state.history.find(search => search.city === action.payload);
      if (item) {
        state.history = [item, ...state.history.filter(search => search.city !== action.payload)];
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { addSearch, moveToTop, setLoading } = weatherSlice.actions;

export default weatherSlice.reducer;

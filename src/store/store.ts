import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/themeSlice';
import weatherReducer from './slice/weatherSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

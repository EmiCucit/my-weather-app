import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import themeReducer from '../store/slice/themeSlice';
import weatherReducer from '../store/slice/weatherSlice';
import { store as appStore } from "../store/store";

export const createTestStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
      weather: weatherReducer,
    },
  });

const customRender = (
  ui: ReactElement,
  {
    store = appStore,
    ...renderOptions
  } = {}
) => {
  return render(<Provider store={store}>{ui}</Provider>, renderOptions);
};

export  { render, screen }  from '@testing-library/react';
export { customRender  };

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ForecastTable from '../src/components/ForecastTable/ForecastTable';
import { RootState } from '../src/store/store';


jest.mock('../src/components/CustomTypography/CustomTypography', () => jest.fn(({ text }) => <div>{text}</div>));
jest.mock('../src/components/CustomBox/CustomBox', () => jest.fn(({ children }) => <div>{children}</div>));
jest.mock('../src/hooks/useIsMobile', () => jest.fn(() => false));

const mockStore = configureStore([]);
const initialState: RootState = {
  weather: {
    history: [
      {
        city: "Capital Federal, Argentina",
        forecastData: [
          { date: '2024-09-26', minTemp: 18, maxTemp: 24, weather: 'Clear' },
          { date: '2024-09-27', minTemp: 15, maxTemp: 22, weather: 'Rain' },
        ],
      },
    ],
    loading: false,
  },
  theme: { darkMode: true }
};

describe('ForecastTable', () => {
  it('debería renderizar correctamente las filas de pronósticos', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ForecastTable />
      </Provider>
    );

    expect(screen.getByText('Jue.')).toBeInTheDocument();
    expect(screen.getByText('Vie.')).toBeInTheDocument();
    expect(screen.getByText('18°C / 24°C')).toBeInTheDocument();
    expect(screen.getByText('15°C / 22°C')).toBeInTheDocument();
    expect(screen.getByTestId('clear')).toBeInTheDocument();
    expect(screen.getByTestId('rain')).toBeInTheDocument();
  });

  it('no debería renderizar nada si no hay forecastData', () => {
    const emptyState = {
      ...initialState,
      weather: {
        ...initialState.weather,
        history: [{ forecastData: null }],
      },
    };

    const store = mockStore(emptyState);

    const { container } = render(
      <Provider store={store}>
        <ForecastTable />
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });

  it('debería renderizar el Loader cuando loading es true', () => {
    const loadingState = {
      ...initialState,
      weather: {
        ...initialState.weather,
        loading: true,
      },
    };

    const store = mockStore(loadingState);

    const { container } = render(
      <Provider store={store}>
        <ForecastTable />
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });
});

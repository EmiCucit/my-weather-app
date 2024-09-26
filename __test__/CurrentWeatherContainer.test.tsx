import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CurrentWeatherContainer from '../src/components/CurrentWeatherContainer/CurrentWeatherContainer';
import { RootState } from '../src/store/store';
import useIsMobile from '../src/hooks/useIsMobile';

jest.mock('../src/hooks/useIsMobile', () => jest.fn());
jest.mock('../src/components/Loader/Loader', () => jest.fn(() => <div data-testid="loader" />));
jest.mock('../src/components/CurrentWeatherContainer/components/CustomIcon', () => jest.fn(() => <div data-testid="custom-icon" />));
jest.mock('../src/components/CurrentWeatherContainer/components/DataItem', () => jest.fn(({ itemField, itemValue }) => (
  <div data-testid={`dataitem-${itemField}`}>
    {itemField}: {itemValue}
  </div>
)));
jest.mock('../src/components/CustomTypography/CustomTypography', () => jest.fn(({ text }) => (
  <div data-testid="custom-typography">{text}</div>
)));

const mockStore = configureStore<RootState>();

describe('CurrentWeatherContainer', () => {
  const initialState: RootState = {
    weather: {
      history: [
        {
          weatherData: {
            weather: 'Clear',
            temperature: 25,
            feelsLike: 27,
            wind: 15,
            humidity: 60,
            pressure: 1013,
          },
          city: 'Capital Federal',
        },
      ],
      loading: false,
    },
  } as unknown as RootState;

  it('renders Loader when loading is true', () => {
    const store = mockStore({
      weather: { ...initialState.weather, loading: true },
      theme: { darkMode: true }
    });
    
    render(
      <Provider store={store}>
        <CurrentWeatherContainer />
      </Provider>
    );
    
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders weather data when loading is false', () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CurrentWeatherContainer />
      </Provider>
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.getByTestId('main-info-box')).toBeInTheDocument();
    expect(screen.getByTestId('weather-detail-box')).toBeInTheDocument();
  });
  
  it('renders correctly on mobile', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CurrentWeatherContainer />
      </Provider>
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.getByTestId('main-info-box')).toBeInTheDocument();
    expect(screen.getByTestId('weather-detail-box')).toBeInTheDocument();

  });
});

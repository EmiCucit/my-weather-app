import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LastSearchs from '../src/components/LastSearchs/LastSearchs';
import useIsMobile from '../src/hooks/useIsMobile';
import { RootState } from '../src/store/store';

jest.mock('../src/hooks/useIsMobile', () => jest.fn());
jest.mock('../src/components/CustomTypography/CustomTypography', () => jest.fn(({ text }) => <div>{text}</div>));
jest.mock('../src/components/LastSearchs/components/LastSearchItem', () => jest.fn(({ city }) => <div>{city}</div>));
const mockStore = configureStore([]);

describe('LastSearchs', () => {
  const initialState: RootState = {
    weather: {
      history: [
        { city: 'Buenos Aires' },
        { city: 'Reconquista' },
      ],
      loading: false,
    },
    theme: { darkMode: true }
  };

  beforeEach(() => {
    (useIsMobile as jest.Mock).mockReturnValue(false);
  });

  it('debería mostrar el título "Últimas busquedas"', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <LastSearchs />
      </Provider>
    );

    expect(screen.getByText('Últimas busquedas')).toBeInTheDocument();
  });

  it('debería renderizar las últimas ciudades buscadas', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <LastSearchs />
      </Provider>
    );

    expect(screen.getByText('Buenos Aires')).toBeInTheDocument();
    expect(screen.getByText('Reconquista')).toBeInTheDocument();
  });

  it('no debería renderizar nada si no hay historial de búsqueda', () => {
    const emptyState = {
      ...initialState,
      weather: {
        history: [],
      },
    };

    const store = mockStore(emptyState);

    const { container } = render(
      <Provider store={store}>
        <LastSearchs />
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });
});

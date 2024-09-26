import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store'; 
import CustomAutocomplete from '../src/components/Autocomplete/Autocomplete';

jest.mock('../src/components/Autocomplete/constants/options', () => ({
  cities: [
    { city: 'Capital Federal, Argentina', alias: 'CABA' },
  ],
}));

jest.mock('../src/hooks/useIsMobile', () => () => false);

jest.mock('../src/components/Autocomplete/hooks/useAutocomplete', () => () => ({
  filterOptions: jest.fn(),
  handleClose: jest.fn(),
  handleOpen: jest.fn(),
  handleSelection: jest.fn(),
  open: false,
}));

describe('CustomAutocomplete Component', () => {
  test('renders input field with correct label', () => {
    render(
      <Provider store={store}>
        <CustomAutocomplete />
      </Provider>
    );

    expect(screen.getByLabelText(/Buscar ciudad/i)).toBeInTheDocument();
  });
});

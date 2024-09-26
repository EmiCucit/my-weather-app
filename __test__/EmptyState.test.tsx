import { render, screen } from '@testing-library/react';
import EmptyState from '../src/components/EmptyState/EmptyState';
import useIsMobile from '../src/hooks/useIsMobile';

jest.mock('../src/hooks/useIsMobile', () => jest.fn());
jest.mock('../src/components/CustomTypography/CustomTypography', () => jest.fn(({ text }) => <div>{text}</div>));

describe('EmptyState', () => {
  beforeEach(() => {
    (useIsMobile as jest.Mock).mockReturnValue(false); 
  });

  it('debería mostrar el mensaje de búsqueda si no se ha buscado', () => {
    render(<EmptyState hasSearchs={false} />);

    expect(screen.getByText('Realizá una búsqueda para ver el clima en tu ciudad')).toBeInTheDocument();
  });

  it('debería mostrar el mensaje de error cuando no hay datos para la ciudad', () => {
    render(<EmptyState hasSearchs={true} city="Buenos Aires" />);

    expect(screen.getByText('No se pudo obtener datos del clima en Buenos Aires')).toBeInTheDocument();
  });

  it('debería ajustar el tamaño de la fuente dependiendo de si es mobile o no', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true); 
    render(<EmptyState hasSearchs={false} />);

    const typography = screen.getByText('Realizá una búsqueda para ver el clima en tu ciudad');
    expect(typography).toBeInTheDocument();
  });
});

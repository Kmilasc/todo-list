import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Menu } from '../../components/menu';
import { CheckListProvider } from '../../providers/CheckListProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

test('verifica se o componente Menu é renderizado corretamente', () => {
  render(
    <QueryClientProvider client={queryClient}>
        <CheckListProvider>
            <Menu isOnTrashPathname={false} />
        </CheckListProvider>
    </QueryClientProvider>
  );

  const linkElement = screen.getByText(/Note Swift/i);
  const inputElement = screen.getByPlaceholderText(/Crie sua lista/i);
  const trashIcon = screen.getByTestId('trashIcon'); 
  expect(linkElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(trashIcon).toBeInTheDocument();
});

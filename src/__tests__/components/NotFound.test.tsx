import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { NotFound } from '../../components/NotFound';

test('verifica se o componente NotFound é renderizado corretamente', () => {
  render(<NotFound />);

  const linkElement = screen.getByText(/Voltar a página inicial/i);
  const textElement = screen.getByText(/Página não encontrada/i);

  expect(linkElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { Footer } from '../../components/footer';

test('verifica se o componente footer é renderizado corretamente', () => {
  render(<Footer />);

  const textElement = screen.getByText(/©2024 Note Swift. Todos os direitos reservados/i);

  expect(textElement).toBeInTheDocument();
});
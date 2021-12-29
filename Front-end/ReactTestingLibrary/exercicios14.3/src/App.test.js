import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import userEvent from '@testing-library/user-event';

it('deve renderizar o componente App', () => {
  const {history} = renderWithRouter(<App />);

  const inicio = screen.getByTestId('inicio')

  expect(inicio).toBeInTheDocument()

  expect(history.location.pathname).toBe('/')

  history.push('/about')

  expect(history.location.pathname).toBe('/about')

  const sobre = screen.getByTestId('sobre')

  expect(sobre).toBeInTheDocument()
  expect(sobre).toHaveTextContent('Você está na página Sobre')

  history.push('/')

  expect(history.location.pathname).toBe('/')

  const linkSobre = screen.getByTestId('linkSobre')

  userEvent.click(linkSobre)

  const sobre2 = screen.getByTestId('sobre')

  expect(history.location.pathname).toBe('/about')
  expect(sobre2).toBeInTheDocument()
  expect(sobre2).toHaveTextContent('Você está na página Sobre')

  history.push('/asassas')

  const title3 = screen.getByTestId('undefined')

  expect(title3).toBeInTheDocument()
  expect(title3).toHaveTextContent('Página não encontrada')
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

afterEach(() => jest.clearAllMocks())

test('Inputs', () => {
  render(<App />)

  const inputNome = screen.getByTestId('inputNome')
  const inputEmail = screen.getByTestId('inputEmail')

  expect(inputNome).toBeInTheDocument()
  expect(inputEmail).toBeInTheDocument()

  userEvent.type(inputNome, 'Matheus')
  userEvent.type(inputEmail, 'matheus@gmail.com')

  expect(inputNome).toHaveValue('Matheus')
  expect(inputEmail).toHaveValue('matheus@gmail.com')
})

import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Componente funciona corretamente com email válido', () => {
  render(<ValidEmail email={'teste@gmail.com'}/>)
  const h3 = screen.getByTestId('h3')
  expect(h3).toHaveTextContent('Email Valido')
})

test('Componente funciona corretamente com email inválido', () => {
    render(<ValidEmail email={'teste@gmail'}/>)
    const h3 = screen.getByTestId('h3')
    expect(h3).toHaveTextContent('Email Inválido')
  })
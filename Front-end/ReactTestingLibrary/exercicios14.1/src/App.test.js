import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import InputTodo from './InputTodo';

test('Há um input com type email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email:')
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email')
});

test('Há dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(3)
});

test('Botão enviar funciona corretamente', () => {
  render(<App />)
  const button = screen.getByTestId('id-send')
  const emailInput = screen.getByLabelText('Email:')
  const h2 = screen.getByTestId('id-email-user')

  expect(h2).toHaveTextContent('Insira um email')

  userEvent.type(emailInput, 'teste@gmail.com')
  userEvent.click(button)

  const h3 = screen.getByTestId('h3')
  const h22 = screen.getByTestId('id-email-user')
  expect(h3).toHaveTextContent('Email Valido')
  expect(h22).toHaveTextContent('Valor: teste@gmail.com')
})

test('Existe um botão para adicionar tarefa', async () => {
  render(<App />)

  const buttonAdd = screen.getByTestId('btnAdd')
  const inputTask = screen.getByTestId('inputTodo')

  expect(buttonAdd).toBeInTheDocument()
  expect(buttonAdd.type).toBe('button')
  expect(buttonAdd).toHaveValue('Adicionar')

  userEvent.type(inputTask, 'Jogar')
  userEvent.click(buttonAdd)

  const li = screen.getByTestId('item')
  expect(li).toHaveTextContent('Jogar')

  userEvent.type(inputTask, 'Durmir')
  userEvent.click(buttonAdd)

  const li2 = screen.getAllByTestId('item')
  expect(li2[0]).toHaveTextContent('Jogar')
  expect(li2[1]).toHaveTextContent('Durmir')

  userEvent.type(inputTask, 'Estudar')
  userEvent.click(buttonAdd)

  const li3 = screen.getAllByTestId('item')
  expect(li3[0]).toHaveTextContent('Jogar')
  expect(li3[1]).toHaveTextContent('Durmir')
  expect(li3[2]).toHaveTextContent('Estudar')

  userEvent.click(li3[0])

  const btnli1 = screen.getAllByRole('button')

  expect(btnli1[3]).toBeInTheDocument()

  userEvent.click(btnli1[3])

  const firstLi = screen.getAllByTestId('item')

  expect(firstLi[0]).toHaveTextContent('Durmir')
})

import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import Item from './Item';

test('item renderiza a string na tela', () => {
    render(<Item content={'Vamos lá!'} />)

    const div = screen.getByTestId('item')
    expect(div).toHaveTextContent('Vamos lá!')
}) 
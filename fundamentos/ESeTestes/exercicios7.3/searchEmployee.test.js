const searchEmployee = require('./searchEmployee')

describe('Funcionamento da função de busca', () => {

    test('Função existe', () => {
    expect(typeof searchEmployee).toBe('function')
})

test('Retorna erro', () => {
    expect(() => {searchEmployee('asas')}).toThrow('Id não registrado ou não existente')
}) 

test('Retorna o usuário correto', () => {
    expect(searchEmployee('4456-4')).toEqual(
        `Nome: Leila Zuckerberg
Especialidades: Context API,RTL,Bootstrap`
      ) 
}) 

}) 
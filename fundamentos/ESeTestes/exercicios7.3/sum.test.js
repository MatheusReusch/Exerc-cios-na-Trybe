
const { expect } = require('@jest/globals');
const sum = require('./sum');

test('Retorna 9 com parametros 4 e 5', () => {
    expect(sum(4,5)).toBe(9)
})

test('Retorna 0 com parametros 0 e 0', () => {
    expect(sum(0,0)).toBe(0)
})

test('Retorna um erro com parametros 4 e 5(string)', () => {
    expect(() => {sum(4,'5')}).toThrowError()
})

test('Retorna um determinado erro com parametros 4 e 5(string)', () => {
    expect(() => {sum(4,'5')}).toThrow('parameters must be numbers')
})
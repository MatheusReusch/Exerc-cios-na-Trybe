
const { expect } = require('@jest/globals')
const myFizzBuzz = require('./myFizzBuzz')

test('Retorna FizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
})

test('Retorna Fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz')
})

test('Retorna Buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
})

test('Retorna o próprio número', () => {
    expect(myFizzBuzz(7)).toBe(7)
})

test('Retorna false', () => {
    expect(myFizzBuzz('as')).toBe(false)
})
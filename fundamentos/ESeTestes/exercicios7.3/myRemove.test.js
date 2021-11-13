const myRemove = require('./myRemove')

test('Tira o 3 do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
})

test('Não retorna errado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4])
})

test('Não bagunça', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
})
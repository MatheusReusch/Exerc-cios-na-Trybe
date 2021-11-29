const { test, expect } = require('@jest/globals')
const { doesNotReject } = require('assert')
const getPokemonDetails = require('./exercicio8')

test('Função retorna o esperado', (done) => {
    getPokemonDetails((pok) => pok.name === 'Charmander', (erro, resultado) => {
        try {
        expect(resultado).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember')
        done()
    } catch (e) {
        done(e)
    }
    })
})

test('Retorna erro', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails((pok) => pok.name === 'blabla', (erro, resultado) => {
      try {
      expect(erro).toEqual(expectedError)
      done()
    } catch (e) {
      done(e)
    }
    })
})
const { test, expect } = require('@jest/globals')
const uppercase = require('./exercicio7')

test('Uppercase funciona', (done) => {
    uppercase('bla', (result) => {
        try {
        expect(result).toBe('BLA')
        done();
    } catch (e) {
        done(e);
    }
    })
})
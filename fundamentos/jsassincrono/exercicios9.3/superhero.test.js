const { test, expect, beforeEach } = require('@jest/globals')
const { FetchError } = require('node-fetch')
const supInfo = require('./superhero')
const url = 'https://www.superheroapi.com/api.php/4192484924171229/489'
const url2 = 'https://www.superheroapi.com/api.php/41924849241719/4'
const object = {
    method: 'GET'
}

test('Retorna o nome do herói', async() => {
    expect(await supInfo(url)).toBe('Nick Fury')
})

test('Retorna erro', async() => {
    const error = await supInfo('https://www.urlalterada.com')
    console.log(error);
    expect(error).toEqual(new FetchError(error.message))
    expect(error.code).toBe('ENOTFOUND')
    expect(error.message).toBe('request to https://www.urlalterada.com/ failed, reason: getaddrinfo ENOTFOUND www.urlalterada.com')
})

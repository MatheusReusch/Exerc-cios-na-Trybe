let retornaNumeroAleatorio = require('./service')

function caps(string) {
    return string.toUpperCase()
}

function firstLetter(string) {
    return string[0]
}

function concat(a, b) {
    return a.concat(b)
}

async function fetchDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => data.status)
}

test('Função retornaNumeroAleatorio', () => {
  retornaNumeroAleatorio = jest.fn().mockReturnValue(10)

  retornaNumeroAleatorio()
  retornaNumeroAleatorio()
  retornaNumeroAleatorio()

  expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(3)
  expect(retornaNumeroAleatorio()).toBe(10)

  retornaNumeroAleatorio = jest.fn().mockImplementation((a, b) => a / b)

  retornaNumeroAleatorio()
  retornaNumeroAleatorio()

  expect(retornaNumeroAleatorio(10, 5)).toBe(2)
  expect(retornaNumeroAleatorio).toHaveBeenCalled()
  retornaNumeroAleatorio = jest.fn().mockImplementation((a, b) => a + b)
  expect(retornaNumeroAleatorio(10, 5)).toBe(15)

  retornaNumeroAleatorio = jest.fn().mockImplementation((a,b,c) => a * b * c)

  expect(retornaNumeroAleatorio(2,4,6)).toBe(48)

  retornaNumeroAleatorio = jest.fn().mockReset()

  retornaNumeroAleatorio = jest.fn().mockImplementation((a) => a * 2)

  expect(retornaNumeroAleatorio(2)).toBe(4)
})

test('3 funções', () => {
    expect(caps('string')).toBe('STRING')

    caps = jest.fn().mockImplementation((string) => string.toLowerCase())

    expect(caps('STRING')).toBe('string')

    expect(firstLetter('string')).toBe('s')

    firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1])

    expect(firstLetter('string')).toBe('g')

    expect(concat('ado', 'ro')).toBe('adoro')

    concat = jest.fn().mockImplementation((a,b,c) => a.concat(b.concat(c)))
    
    expect(concat('ad',  'o', 'ro')).toBe('adoro')

    caps = jest.fn().mockRestore()

})

test('Fetch dos dogs', async () => {
    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
            message: "https://images.dog.ceo/breeds/terrier-toy/n02087046_3311.jpg",
            status: "success"
        })
    })

    expect(await fetchDog()).toBe("success")
})
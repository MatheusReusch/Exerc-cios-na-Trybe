const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  let array2 = []
  function flatten() {
    arrays.map((array) => {
    for (let i = 0; i < array.length; i += 1) {
        array2.push([array[i]])
    }
    }); return array2
  }

  console.log(flatten())

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  let resultado = ''
  function reduceNames() {
    books.map((livro) => {
    resultado = resultado + livro.author.name + ', '
    }); return resultado
  }

  console.log(reduceNames())

  //const expectedResult = 43;
let arraio = []
function averageAge() {
  books.map((livro, indice) => {
      arraio.push(livro.releaseYear - livro.author.birthYear)
  }); return arraio.reduce((result, element) => {
    result += element
    return result
}) / books.length
}

console.log(averageAge())


//const expectedResult = {
    //id: 1,
    //name: 'As Crônicas de Gelo e Fogo',
    //genre: 'Fantasia',
    //author: {
      //name: 'George R. R. Martin',
      //birthYear: 1948,
    //},
    //releaseYear: 1991,
  //};
  
  function longestNamedBook() {
       return books.reduce((acc, current) => {
            if (current.name.length > acc.name.length) acc = current
            return acc
        })
  }

  console.log(longestNamedBook())

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  let as = 0
  function containsA() {
    names.map((palavras) => {
        for (let i = 0; i < palavras.length; i += 1) {
        if (palavras[i] === 'A' || palavras[i] === 'a') {as += 1}
    } return as
    }); return as
  }

  console.log(containsA())

  const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
let final = []
const media = (array) => {
  let soma = array.reduce((arr, number) => {
      arr += number
      return arr
  }); return soma / array.length 
}
function studentAverage() {
  students.map((estudante, indice) => {
      final.push({name: estudante, average: media(grades[indice])})
  }); return final
}
console.log(studentAverage())
//const expected = [
  //{ name: 'Pedro Henrique', average: 7.8 },
  //{ name: 'Miguel', average: 9.2 },
  //{ name: 'Maria Clara', average: 8.8 },
//];
function genre() {
 return books.map((livro, indice) => {
    return {nome: livro.name, genre: livro.genre} 
  })
}

console.log(genre())

function namesOrd () {
  return books.reduce((acc, livro, indice) => {
    if (livro.name.length > acc.name.length) {acc = livro}
    else if (livro.name.length < acc.name.length) {acc = acc}
    return acc
  })
}

console.log(namesOrd())
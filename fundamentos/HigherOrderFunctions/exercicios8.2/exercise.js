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

  //exe 1
  
  function authorBornIn1947() {
     return books.find((objeto) => {
        return objeto.author.birthYear === 1947
        })
  }

  console.log(authorBornIn1947())

  //exe 2

  function smallerName() {
    let nameBook = [books[0].name]
    books.forEach((objeto) => {
    if (objeto.name.length < nameBook[0].length) {nameBook[0] = objeto.name}
    })
    return nameBook;
  }

  console.log(smallerName())

  //exe 3

  function getNamedBook() {
    return books.find((objeto) => {
        return objeto.name.length === 26
    })
  }

  console.log(getNamedBook())

  // exe 4

  //exe 5

function everyoneWasBornOnSecXX() {
  return books.every((objeto) => {
      return objeto.author.birthYear >= 1901 && objeto.author.birthYear <= 2000;
  })
}

console.log(everyoneWasBornOnSecXX())

//exe 6

function someBookWasReleaseOnThe80s() {
  return books.some((objeto) => {
      return objeto.releaseYear >= 1980 && objeto.releaseYear < 1990
  })
}

console.log(someBookWasReleaseOnThe80s())

// exe 7

function authorUnique() {
    let array = []
    books.forEach((objeto, indice) => {
        array.push(books[indice].author.birthYear) 
    })
    let repeated = [];

    array.filter(function(elemento, i) {
    if(array.indexOf(elemento) !== i) {
        repeated.push(elemento)
    }
    return array.indexOf(elemento) == i;
}) 
if (repeated.length > 0) {
    return false
}
else {return true}
}

console.log(authorUnique())
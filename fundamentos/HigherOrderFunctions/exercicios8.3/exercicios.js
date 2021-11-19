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
  
  // exe 1
  
  function formatedBookNames() {
    let resultado = books.map((livro) => livro.name + ' - ' + livro.genre + ' - ' + livro.author.name)
    return resultado
  }

  console.log(formatedBookNames())

  // exe 2

  let array = []
  let autores = []
  function nameAndAge() {
      let resultado = books.map((livro) => {
       return {age: livro.releaseYear - livro.author.birthYear, author: livro.author.name}
    }); resultado.forEach((autor) => {
       array.push(autor.age)
    }); let idadesOrdenadas = array.sort((a, b) => a - b)
    idadesOrdenadas.map((idade) => {
        autores.push({age: idade, author: books.find((livro) => {
        return livro.releaseYear - livro.author.birthYear === idade    
        }).author.name});
    }); return autores
  }

  console.log(nameAndAge())

  // exe 3 

  function fantasyOrScienceFiction() {
    return books.filter((livro) => livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica')
  }

  console.log(fantasyOrScienceFiction())

  // exe 4

  const expectedResult = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
  let arraio = []
  function oldBooksOrdered() {
    let livrosVelhos = books.filter((livro) => 2021 - livro.releaseYear > 60)
    let idades = livrosVelhos.map((livro) => {
        return 2021 - livro.releaseYear
    }); let idadesOrdenadas = idades.sort((a, b) => b - a)
     idadesOrdenadas.map((idade) => {
        arraio.push({id: livrosVelhos.find((livro) => {
            return 2021 - livro.releaseYear === idade
        }).id, name: livrosVelhos.find((livro) => {
            return 2021 - livro.releaseYear === idade
        }).name, genre: livrosVelhos.find((livro) => {
            return 2021 - livro.releaseYear === idade
        }).genre, author: {name: livrosVelhos.find((livro) => {
            return 2021 - livro.releaseYear === idade
        }).author.name, birthYear: livrosVelhos.find((livro) => {
            return 2021 - livro.releaseYear === idade
        }).author.birthYear}, releaseYear: livrosVelhos.find((livro) => {
            return 2021 - livro.releaseYear === idade
        }).releaseYear});
    }); return arraio
  }

  console.log(oldBooksOrdered())

  // exe 5

  //const expectedResult = [
    //'Frank Herbert',
    //'George R. R. Martin',
    //'Isaac Asimov',
    //'J. R. R. Tolkien',
  //];
  let array3 = []
  function fantasyOrScienceFictionAuthors() {
     fantasyOrScienceFiction().map((livro) => {
       array3.push(livro.author.name)
    }); return array3.sort()
  }

  console.log(fantasyOrScienceFictionAuthors())

  // exe 6

  //const expectedResult = [
    //'O Senhor dos Anéis',
    //'Fundação',
    //'O Chamado de Cthulhu',
  //];
  //let array4 = []
  function oldBooks() {
    let array4 = books.filter((livro) => 2021 - livro.releaseYear > 60).map((livro) => {
        return livro.name
    }); return array4
  }
  console.log(oldBooks())

  // exe 7

  //const expectedResult = 'O Senhor dos Anéis';
let array6 = []
let count = 0
function authorWith3DotsOnName() {
   books.map((livro) => {
       if (livro.author.name.replace(/[^.]/g, "").length >= 3) {
           array6.push(livro.name)
       } return array6
   }); return array6
}

console.log((authorWith3DotsOnName()))
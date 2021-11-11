 const licao1 = {
 lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  }
}
  const licao2 = {   
    lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  }
}
  const licao3 = {   
lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  }
}
  function add(objeto, chave, valor) {
      objeto[chave] = valor
      return objeto
  }

  console.log(add(licao2.lesson2, 'turno', 'noite'))

  function keys(objeto) {
      let resultado = Object.keys(objeto)
      return resultado;
  }

  console.log(keys(licao2.lesson2))

  function tamanho (objeto) {
      let resultado = Object.keys(objeto).length
      return resultado;
  }

  console.log(tamanho(licao2.lesson2))

  const values = (objeto) => Object.values(objeto)

  console.log(values(licao2.lesson2))
  
  const allLessons = Object.assign({}, licao1, licao2, licao3)

  console.log(allLessons)

  function total() {
      let resultado = licao1.lesson1.numeroEstudantes + licao2.lesson2.numeroEstudantes + licao3.lesson3.numeroEstudantes
      return resultado
  }

  console.log(total())

  function posicao(objeto, posicao) {
    let index = Object.keys(objeto)[posicao]
    let resultado = objeto[index]
    return resultado
  }

  console.log(posicao(licao1.lesson1, 3));

  function verifyPair (objeto, chave, valor) {
      if (objeto[chave] == valor) {
          return true;
      }
      else {
          return false;
      }
  }

  console.log(verifyPair(licao3.lesson3, 'turno', 'noite'));
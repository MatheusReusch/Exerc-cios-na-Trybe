const data = require('./data');

function getSpeciesByIds(...ids) {
  let array = []
  ids.map((id, indice) => {
     array.push(data.species.find((especie, index) => {
      return especie.id === id
    }))
  }); return array.map((sp, ind) => {
      return sp
  })
}

console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5', '0938aa23-f153-4937-9f88-4858b24d6bce', '78460a91-f4da-4dea-a469-86fd2b8ccc84'))

function getAnimalsOlderThan(nome, idade) {
  let specie = data.species.filter((especie, indice) => {
      return especie.name === nome
  }); return specie[0].residents.every((residentes, indice) => {
      return residentes.age >= idade
  })
}

console.log(getAnimalsOlderThan('lions', 7))

function getEmployeeByName(nome) {
    if (typeof nome === 'undefined') {return {}}
  return data.employees.find((empregados, indice) => {
      return empregados.firstName === nome || empregados.lastName === nome
  })
}

console.log(getEmployeeByName('Nelson'))

module.exports = getSpeciesByIds;
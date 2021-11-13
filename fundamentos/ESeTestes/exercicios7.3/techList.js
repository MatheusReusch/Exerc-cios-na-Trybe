let array = []
function techList (techs, nome) {
    if (techs.length == 0) {return 'Vazio!'}
    let ordenado = techs.sort()
  for (let i = 0; i < ordenado.length; i += 1) {
      array.push({name: nome, tech: ordenado[i]})
  } return array
}

module.exports = techList
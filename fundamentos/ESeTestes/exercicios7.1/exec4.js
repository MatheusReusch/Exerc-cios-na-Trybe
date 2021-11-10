//localStorage.setItem('count', 0)
//let botao = document.getElementById('btn')
//botao.addEventListener('click', aumentar)
//let clickcount = document.getElementById('count')
//clickcount.innerHTML = 0;
//function aumentar() {
    //clickcount.innerHTML = parseInt(localStorage.getItem('count')) + 1;
    //let resultado = localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1)
    //return resultado;
//}
let string2 = 'A Trybe é x'

function trocar(string) {
  let letras = string2.split('')
  for (let i = 0; i < letras.length; i += 1) {
      if (letras[i] == 'x') {
          letras[i] = string
      } 
  } 
  let final = letras.join([separador = ''])
  return final
}

console.log(trocar('muito boa'))

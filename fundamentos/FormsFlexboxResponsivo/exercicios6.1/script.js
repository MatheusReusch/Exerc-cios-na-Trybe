let btn = document.getElementById('botao')
btn.addEventListener('click', imprimir)
function imprimir (event) {
  event.preventDefault()
  let p = document.getElementById('curriculo')
  let f = document.getElementById('formulario')
  let f1 = document.getElementById('nome')
  let f2 = document.getElementById('email')
  p.innerHTML = f1.value + ' ' + f2.value
}



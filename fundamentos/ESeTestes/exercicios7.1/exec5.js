localStorage.setItem('count', 0)
let botao = document.getElementById('btn')
botao.addEventListener('click', aumentar)
let clickcount = document.getElementById('count')
clickcount.innerHTML = 0;
function aumentar() {
    clickcount.innerHTML = parseInt(localStorage.getItem('count')) + 1;
    let resultado = localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1)
    return resultado;
}
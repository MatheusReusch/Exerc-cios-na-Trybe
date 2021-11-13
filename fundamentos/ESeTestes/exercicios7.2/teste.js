let numerador = document.getElementById('num')
let denominador = document.getElementById('den')
let spancerto = document.getElementById('resultado')
let spanerrado = document.getElementById('resultadoerrado')
let botao = document.getElementById('btn')
botao.addEventListener('click', dividir)
function dividir() {
    let result = numerador.value / denominador.value
    try {
        if (isNaN(result)) throw new Error('te liga magrão');
        spancerto.innerHTML = numerador.value / denominador.value
        spanerrado.innerHTML = ''   
    }
     catch (e) {
        spanerrado.innerHTML = e;
        spanerrado.style.color = 'red'
        spancerto.innerHTML = ''
}
}

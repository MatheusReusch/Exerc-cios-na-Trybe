window.onload = function() {

let input = document.createElement('input')
input.placeholder = 'Cor de fundo'
let body = document.querySelector('body')
body.appendChild(input)
function backgroundcolor() {
    document.querySelector('body').style.backgroundColor = input.value
    console.log('funcionou')
}
input.addEventListener('keyup', backgroundcolor)



let input2 = document.createElement('input')
input2.placeholder = 'Cor do Texto'
body.appendChild(input2)
function textcolor() {
    document.querySelector('.text').style.color = input2.value
    document.querySelector('.text2').style.color = input2.value
}
input2.addEventListener('focus', textcolor)

input2.value = localStorage.getItem('input2.value') 
alert('Carregou')
}
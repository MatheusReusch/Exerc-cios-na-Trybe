const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]
localStorage.setItem('letra', 'O')
function myDivs() {
  for (let index = 0; index < 9; index += 1) {
  let div = document.createElement('div')
  div.className = 'celula'
  div.id = index
  let grid = document.querySelector('.grid')
  grid.appendChild(div)
  div.addEventListener('click', Jogar)
  document.getElementById('reset').addEventListener('click', resetar)
    function resetar () {
    div.innerText = ''  
    }
  }
  } 
  myDivs()
  function Jogar(event) {
    let alvo = event.target
    if (localStorage.getItem('letra') == 'O') {localStorage.setItem('letra', 'X')} 
    else if (localStorage.getItem('letra') == 'X') {localStorage.setItem('letra', 'O')}
    alvo.innerText = localStorage.getItem('letra')
    if (localStorage.getItem('letra') == 'X') {document.getElementById('player').innerText = 'Vez do jogador O'}
    else if (localStorage.getItem('letra') == 'O') {document.getElementById('player').innerText = 'Vez do Jogador X'}
    
    }








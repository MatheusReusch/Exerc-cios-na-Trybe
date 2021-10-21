const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let li = document.querySelector('#second-li');
li.addEventListener("click", addTech)
function addTech() {
li.className = 'tech'
console.log('funcionou')
};

let li2 = document.querySelector('#third-li');
li2.addEventListener('click', addTech2)

function addTech2() {
  li2.className = 'tech'
  console.log('funcionou')
  };

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let inputloc = document.querySelector('input');
let primeiroQuadrado = document.querySelector('#first-li')
inputloc.addEventListener('change', write)
function write() {
  primeiroQuadrado.innerText = inputloc.innerText
  console.log('funcionou')
  console.log(inputloc.innerText) 
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

let spotrybefy2 = document.querySelector('#my-spotrybefy');
spotrybefy2.addEventListener('click', redirect)

function redirect () {
  let portfolio = document.createElement('a')
  portfolio.href = 'https://www.linkedin.com/in/matheus-reusch-0184ab216/'
  portfolio.target = '_blank'
  portfolio.innerHTML = spotrybefy2
  let main = document.querySelector('#main')
  main.appendChild(portfolio)
  console.log('Rodou')
  console.log(portfolio) 
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

spotrybefy2.addEventListener('mouseover', color)

function color () {
  spotrybefy2.style.color = 'red'
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
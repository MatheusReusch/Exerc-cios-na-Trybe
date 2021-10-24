function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  let pai = document.querySelector('#days');

  for (i = 0; i < dezDaysList.length; i += 1) {
      let dia = dezDaysList[i]
      let dias = document.createElement('li');
      dias.innerText = dia;
      dias.className = 'day';
      if (dias.innerText == 24 || dias.innerText == 25 || dias.innerText == 31) {
          dias.className = 'day holiday'
      }
      if (dias.innerText == 4 || dias.innerText == 11 || dias.innerText == 18) {
          dias.className = 'day friday'
      } else if (dias.innerText == 25) {dias.className = 'day holiday friday'}
      pai.appendChild(dias)
  }

  function createButton(feriado) {
      
    let botao = document.createElement('button')
      botao.innerHTML = feriado
      botao.id = "btn-holiday2"
      let father = document.querySelector('.buttons-container')
      father.appendChild(botao)
  }

  let botao = document.createElement('button')
  botao.innerHTML = 'Feriados'
  botao.id = "btn-holiday"
  let father = document.querySelector('.buttons-container')
  father.appendChild(botao)

  botao123 = document.querySelector("#btn-holiday")
function corDeFundo() {
    let feriados123 = document.querySelectorAll('.holiday')
    for (i = 0; i < feriados123.length; i += 1) {
    feriados123[i].style.backgroundColor = 'green'
   console.log('Rodou') }
}
botao123.addEventListener('click', corDeFundo)

function createButton2() {
      
    let botao = document.createElement('button')
      botao.innerHTML = 'Sexta-Feira'
      botao.id = "btn-friday"
      let father = document.querySelector('.buttons-container')
      father.appendChild(botao)
  }
  for (i = 0; i < document.querySelectorAll('.day').length; i += 1)
  {let diasDoMes = document.querySelectorAll('.day')[i] 
  function zoom (event) {
      let elemento = event.target
      elemento.style.fontSize = '30px'
      
  }
  diasDoMes.addEventListener('mouseover', zoom) }

  for (i = 0; i < document.querySelectorAll('.day').length; i += 1)
  {let diasDoMes = document.querySelectorAll('.day')[i] 
  function zoomout (event) {
      let elemento = event.target
      elemento.style.fontSize = '15px'
       } diasDoMes.addEventListener('mouseleave', zoomout)
  }

  function tarefa (cozinhar) {
    let task = document.createElement('span')
    task.innerText = cozinhar;
    let taskpai = document.querySelector('.my-tasks')
    taskpai.appendChild(task)
  }

  function legenda(cor) {
    let myDiv = document.createElement('div')
    myDiv.style.backgroundColor = cor
    myDiv.className = 'task'
    myDiv.innerText = 'D'
    let divpai = document.querySelector('.my-tasks')
    divpai.appendChild(myDiv)

  }

  function legenda2(cor) {
    let myDiv = document.createElement('div')
    myDiv.style.backgroundColor = cor
    myDiv.className = 'task'
    myDiv.innerText = 'A'
    let divpai = document.querySelector('.my-tasks')
    divpai.appendChild(myDiv)
  }

  function legenda3(cor) {
    let myDiv = document.createElement('div')
    myDiv.style.backgroundColor = cor
    myDiv.className = 'task'
    myDiv.innerText = 'C'
    let divpai = document.querySelector('.my-tasks')
    divpai.appendChild(myDiv)
  }

  tarefa('Durmir')
  tarefa('Almoçar')
  tarefa('Cozinhar')
  legenda('green')
  legenda2('red')
  legenda3('pink')

  for (i = 0; i < 3; i += 1) {
    let cores = document.getElementsByClassName('task')[i]
      
    function selecao () {
      if (cores.innerText == 'D') {document.getElementsByTagName('span')[0].className = 'task selected'}
      else if (cores.innerText == 'A') {document.getElementsByTagName('span')[1].className = 'task selected'}
      else if (cores.innerText == 'C') {document.getElementsByTagName('span')[2].className = 'task selected'}
      console.log('funcionou')
    }
    cores.addEventListener('click', selecao)}
  


  
    

  
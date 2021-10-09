let tasksList = ['Acordar','Tomar Café','Estudar','Almoçar','Jogar']
tasksList.push('Durmir');
tasksList.unshift('Sonhar');
tasksList.pop();
tasksList.shift();
let indexOf = tasksList.indexOf('Estudar');
console.log(indexOf)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato');

console.log(menu)

for (let index = 0; index < menu.length; index++) {console.log(menu[index])}

let number = 5;

for (let contador = 1; contador <= 9; contador++) {
    console.log('*')
    console.log(number * contador)
}

let listaDeNomes = ['Maria', 'Joao', 'Joana']

for (index = 0;index < listaDeNomes.length;index++) {
    console.log('Bem vindo ' + listaDeNomes[index])
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (index = 0; index < groceryList.length; index += 1)
{console.log(groceryList[index])}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nomes of names) {console.log(nomes)}
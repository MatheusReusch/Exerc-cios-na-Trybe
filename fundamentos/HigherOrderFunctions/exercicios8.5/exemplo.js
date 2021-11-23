// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maca', 'banana', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['petiscos', 'salame', 'queijo'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao0, saudacao1] = saudacoes

saudacao1(saudacao0)

let comida2 = 'gato';
let animal2 = 'água';
let bebida2 = 'arroz';

 // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let array = [comida2, animal2, bebida2]

const [animal, bebida, comida] = array

console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

 // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const [num1, num2, num3, num4, num5, num6, num7] = numerosPares

numerosPares = [num4, num5, num6, num7]

console.log(numerosPares);

//const person = {
  //name: 'João',
  //lastName: 'Jr',
  //age: 34,
//};

//const { nationality = 'Brazilian' } = person;

//console.log(person)



const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const {nationality = 'Brazilian'} = person

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const getNationality = (object) => {
  const {firstName, nationality = 'Brazilian'} = object
  return `${firstName} is ${nationality}`
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

const greeting = (user) => { 
  if (typeof user === 'undefined') {user = 'usuário'}
  console.log(`Welcome ${user}!`)
};

greeting();

const multiply = (number, value = 1) => {
  return number * value
};

console.log(multiply(8));
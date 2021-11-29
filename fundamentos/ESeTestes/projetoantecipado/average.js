//Requisito 1
function average(array) {
  let soma = 0;
  if (array.length == 0) {return undefined}  
  for (let i in array) {
      soma += Math.round(array[i])
      if (typeof array[i] == 'string')  {return undefined}
  } 
  return soma / array.length;
}
console.log(average([2,5,'2']))
console.log(average([2,5,11]))
console.log(average([2.3,4.6,10.8]))

//Requisito 2

//test('Função existe', () => {
  //expect(typeof numbers).toBe('function')
//})

//test('Retorna true quando array vazio', () => {
    //expect(numbers([])).toBe(true) 
//})

//test('Retorna false quando array tem número em string', () => {
    //expect(numbers([1,2,'3'])).toBe(false) 
//})

//test('Retorna false quando contem string', () => {
    //expect(numbers([1,2,'string'])).toBe(false)
//})

//test('Retorna true quando todos os parametros são números', () => {
    //expect(numbers([1,2,3])).toBeTruthy()
//})

// Requisito 3

function vqv(nome, idade) {
  if (nome == null || idade == null) {return undefined}
  else if (nome.length != 0 && idade.length != 0) {return `Oi, meu nome é ${nome}!
  Tenho ${idade} anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`}
}

console.log(vqv())

// Requisito 4

//test('Função existe', () => {
  //expect(typeof circle).toBe('function')
//})

//test('Retorna undefined caso raio não especificado', () => {
    //expect(circle()).toBe(undefined)
//})

//test('Retorna undefined quando parametro é string', () => {
    //expect(circle('trybe')).toBe(undefined)
//})

//test('Retorna undefined quando parametro é numero em string', () => {
    //expect(circle('12')).toBe(undefined)
//})

//test('Retorna 0 quando parametro é 0', () => {
    //expect(circle(0)).toBe(undefined)
//})

//test('Retorna corretamente os valores', () => {
    //expect(circle(3)).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 })
//})

//Requisito 5


function createStudent(nome) {
    let resultado = {
      name: nome,
      feedback: () => 'Eita pessoa Boa!'
  } 
  return resultado
}
const estudante = createStudent('Matheus')
console.log(estudante.feedback())

// Requisito 6

//test('Função existe', () => {
    //expect(typeof productDetails).toBe('function')
//})

//test('Retorno undefined quando não há parametros', () => {
    //expect(productDetails()).toEqual([
  //{ name: undefined, details: { productId: 'undefined123' } },
  //{ name: undefined, details: { productId: 'undefined123' } }
//])
//})

//test('Retorno quando um parametro existe e é um número', () => {
    //expect(productDetails(2)).toEqual([
  //{ name: 2, details: { productId: '2123' } },
  //{ name: undefined, details: { productId: 'undefined123' } }
//])
//})

//test('Retorno quando dois parametros existem mas são números', () => {
    //expect(productDetails(4)).toEqual([
  //{ name: 4, details: { productId: '4123' } },
  //{ name: 4, details: { productId: '4123' } }
//])
//})

//test('Retorna o array de objetos corretamente com strings', () => {
    //expect(productDetails()).toEqual([
  //[
  //{ name: 'Pomada', details: { productId: 'Pomada123' } },
  //{ name: 'Shampoo', details: { productId: 'Shampoo123' } }
//]
//])
//})

// Requisito 7

function calculator (num1, num2) {
  let resultado = {
    sum: num1 + num2,
    mult: num1 * num2,
    div: Math.floor(num1 / num2),
    sub: num1 - num2
} 
return resultado
}

console.log(calculator(1, 2))

function arrayGenerator(conv, calculator) {
  if (conv == 'keys') {return Object.keys(calculator)}
  else if (conv == 'values') {return Object.values(calculator)}
  else if (conv == 'entries') {return Object.entries(calculator)}
  else {return undefined}
}

console.log(arrayGenerator('entries', {sum: 3, mult: 2, div: 0, sub: -1}))

// Requisito 8

const myCounter = () => {
    var myArray = [];
    for (let counter = 0; counter <= 3; counter += 1) {
      myArray.push(counter);
      for (let counter = 2; counter <= 3; counter += 1) {
        myArray.push(counter);
      }
    }
    return myArray;
  };

  console.log(myCounter())

  //Requisito 9 

  //test('Função existe', () => {
      //expect(typeof getCharacter).toBe('function')
  //})

  //test('Retorna undefined caso não seja especificado um parametro', () => {
      //expect(getCharacter()).toBe(undefined)
  //})

  //test('Função não é case sensitive', () => {
      //expect(getCharacter('BrIenNe')).toEqual({
  //name: 'Brienne Tarth',
  //class: 'Knight',
  //phrases: [
    //'Im No Lady, Your Grace.',
    //'I, Brienne Of Tarth, Sentence You To Die.'
  //]
//})
  //})

  //test('Retorna undefined caso o parametro especificado é inexistente', () => {
      //expect(getCharacter('Prienneee')).toBe(undefined)
  //})

  //test('Retorna undefined caso o parametro especificado é uma string em formato de número', () => {
      //expect(getCharacter('2')).toBe(undefined)
  //})

  //test('Função retorna o objeto correto', () => {
      //expect(getCharacter('brienne')).toEqual({
  //name: 'Brienne Tarth',
  //class: 'Knight',
  //phrases: [
    //'Im No Lady, Your Grace.',
    //'I, Brienne Of Tarth, Sentence You To Die.'
  //]
//})
  //})

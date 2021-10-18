let player = {
     name: 'Marta',
     lastName: 'Silva',
     age: 34,
     medals: {golden: 2, silver: 3},
     fullName: 'Marta Silva',
     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('A jogadora ' + player.fullName + ' tem ' + player.age + ' anos de idade.')
console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let key in names) {
      console.log('Olá ' + names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car) {
      console.log(index + ": " + car[index])
  }
let statusCarro = 'desligado';
  function ligarDesligar() {
if (statusCarro === 'ligado') {
    statusCarro = 'desligado'
}
else if (statusCarro === 'desligado') {
    statusCarro = 'ligado'
}
else (statusCarro = 'Inválido')
return statusCarro
  }
  
  console.log(ligarDesligar())
  
  let aceleracao = 0;
    function acelerar(incremento) {
        aceleracao += incremento;
        return  'Acelerando a ' + aceleracao + ' m/s2'
    }

console.log(acelerar(30))  

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, " + info.personagem)
  info.recorrente = "Sim";

  console.log(info)

  for (let key in info) {
      console.log(key)
  }

  for (let key in info) {
      console.log(info[key])
  }

  let info2 = {  
  };

  info2.personagem = "Margarida e Tio Patinhas"
  info2.origem = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178"
  info2.nota = "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas"
  info2.recorrente = "Ambos recorrentes"

  console.log(info2)

  function verificaPalindrome(array) {
  for (i = 0; i < array.length; i += 1) {    
    if (array[i] != array.reverse()[i]) {return 'False'}
    else if (array[i] === array.reverse()[i]) {
      return "True" }}
      
  }
 
let array2 = ['a','r','c'];

console.log(verificaPalindrome(array2))

function maiorIndice(array3) {
   let ordenado = array3.sort((a, b) => a - b);
   let maior = ordenado[ordenado.length - 1]
   for (i = 0; i < array3.length; i += 1) {
       if (maior === array3[i]) {
           return i;
       }
   } 
}
let array4 =  [2, 3, 6, 7, 10, 20];
console.log(maiorIndice(array4))

function menorIndice(array5) {
    let ordenado = array5.sort((a, b) => a - b); 
    let menor = ordenado[0];
    for (i = 0; i < array5.length; i += 1) {
        if (menor == array5[i]) {
            return array5;
        } 
    }
 }

 let array6 = [2, 4, 6, 7, 10, 0, -3];
 console.log(menorIndice(array6))

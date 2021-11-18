const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((elementos) => {
    if (elementos % 2 === 0 && elementos !== 0) {console.log(elementos)}
})

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase()
};

names.forEach(convertToUpperCase);
 console.log(names)// [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

 const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach((email) => {
    showEmailList(email)
})

const numbers2 = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

console.log(numbers2.find(verifyEven))

const findDivisibleBy3And5 = () => {
   const verify3and5 = (number) => number % 3 === 0 && number % 5 === 0
   return numbers2.find(verify3and5) 
}
console.log(findDivisibleBy3And5())

const names2 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const nomeCom5Letras = (nome) => nome.length === 5;
  return names2.find(nomeCom5Letras)
}

console.log(findNameWithFiveLetters());

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    const verifyId = (objeto) => objeto.id === id
    return musicas.find(verifyId)
  }
  
  console.log(findMusic('31031686'))

  const names4 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nomes) => nomes === name) 
}

console.log(hasName(names4, 'Ana'))

let people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((pessoas) => pessoas.age >= minimumAge)
  }
  
  console.log(verifyAges(people, 18));
  
  const ages = () => {
    let array = []
  for (let i = 0; i < people.length; i += 1) {
  array.push(Object.values(people[i])[1]) 
  }  
  return array
}

let ages2 = []
ages2.push(ages())
let agesOrdenado = ages2[0].sort((a, b) => a - b)
let people2 = [];
people.forEach((objeto, indice) => {
    for (let i = 0; i < agesOrdenado.length; i += 1) {
    if  (people[indice].age === agesOrdenado[i]) {people2[i] = {name: people[indice].name, age: agesOrdenado[i]}}
}
})

people = people2

console.log(people)
  
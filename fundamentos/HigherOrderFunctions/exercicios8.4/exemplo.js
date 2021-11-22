const numbers = [50, 85, -30, 3, 15];
let numero;
for (let i = 0; i < numbers.length; i += 1) {
    numero = numbers.sort((a, b) => a - b)[numbers.length - 1]
}

console.log(numero)

let numero2 = numbers.sort((a, b) => a - b).reduce((result, number) => {
    return result = number
})

console.log(numero2)

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

let pares = numbers2.reduce((result, number) => {
    if (number % 2  === 0) {result += number}
    return result
})

console.log(pares)

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 71 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

  let dif = []
  
  let resultado = estudantes.map((next, indice) => {
   let melhorMateria = next.materias.reduce((arr2, next2) => {
       if (next2.nota > arr2.nota) {arr2 = next2}
       return arr2
   }); 
   dif = {nome: next.nome, materia: melhorMateria.name}
    return dif
  })

  console.log(resultado)
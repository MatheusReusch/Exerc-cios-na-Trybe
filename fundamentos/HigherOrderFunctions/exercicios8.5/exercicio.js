const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea() // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});
let soma = 0
function sum (...args) {
    soma = 0
    for (let i = 0; i < args.length; i += 1) {
      soma = soma + args[i]
    } return soma
}

console.log(sum(2,3,4,6,10))

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  
  const personLikes = (object) => {
    const {name, age, likes} = object  
    return `${name} is ${age} years old and likes ${likes.join(', ')}.`
};
  
  console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  function filterPeople () {
    return people.filter((pessoa, indice) => {
        return pessoa.nationality === 'Australian' && pessoa.bornIn >= 1901 && pessoa.bornIn < 2000
    }) 
  }

  console.log(filterPeople())

  const myList = [1, 2, 3];
const [number1, number2, number3] = myList
const swap = () => [number3, number2, number1]

console.log(swap())

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

function toObject (lista) {
  const [modelo, fabricante, ano] = lista
  return {modelo, fabricante, ano}
}

console.log(toObject(palio))

const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  function shipLength (navio) {
        const {name, length, measurementUnit} = navio
        return `${name} is ${length} ${measurementUnit} long`   
  }
  
  console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'

  function greet (name, greeting = 'Hi') {
    return greeting + ' ' + name
  }

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'


          
const products = [
    {
      name: 'laptop',
      price: 1000,
      id: 3,
    },
    {
      name: 'desktop',
      price: 1500,
      id: 2
    },
    {
      name: 'phone',
      price: 500,
      id: 1
    }
  ];
  
  console.log(products.sort((a, b) => a.price - b.price));


          
const cart = [
    {
      name: "laptop",
      price: 1000,
      quantity: 2,
      id: 3,
    },
    {
      name: "desktop",
      price: 1500,
      quantity: 1,
      id: 2,
    },
    {
      name: "phone",
      price: 500,
      quantity: 3,
      id: 1,
    },
  ];
  
        
let totalCart = cart.reduce((acc,compra, indice) => { 
    acc = acc + (compra.price * compra.quantity)
    return acc
}, 0)

  console.log(totalCart);
  
          
  
          
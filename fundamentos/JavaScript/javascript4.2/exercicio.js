let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidade = 0;
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 == 1) { quantidade++ }
}

console.log(quantidade)

let array = [];

for (index = 1; index < 26; index += 1) {
  array.push(index)
}

console.log(array)

for (let div of array) {
  div /= 2
  console.log(div)
}

let numbers2 = [];

for (indice = 0; indice < numbers.length; indice += 1) {
  if (indice != numbers.length - 1) {
    mul = numbers[indice] * numbers[indice + 1];
  }

  else if (indice = numbers.length - 1) { mul = numbers[numbers.length - 1] * 2 }
  numbers2.push(mul); console.log(mul);
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (index = 0; index < numbers.length; index += 1) {soma += numbers[index];
console.log(soma)
}

let media = soma / numbers.length;
console.log(media)

if (media > 20) {console.log('Maior que 20')}
else {console.log('Menor ou igual a 20')}

let maior = numbers.sort((a, b) => a - b)[numbers.length - 1];

console.log(maior)

let quantidade = 0;
for (let i = 0; i < numbers.length; i += 1) {
 if (numbers[i] % 2 == 1) {quantidade += 1} 
}

console.log(quantidade)

console.log(numbers[0])



for (i = 1; i < 26;i += 1) {
    let array = [];
    let resultado = array.push(i);
    console.log(resultado)
}

for (let sum of numeros) {
    sum /= 2;
    console.log(sum)
}

for (index = 0; index < numeros.length; index += 1) {
    let mul = numeros[index] * 2;
    console.log(mul)
}


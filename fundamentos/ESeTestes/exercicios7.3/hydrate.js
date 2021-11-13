
function hydrate (string) {
    let numeros = 0;
    var res = string.replace(/\D/g, "")
    let array = res.split('')
    for (let i = 0; i < array.length; i += 1) {
    numeros = Number(numeros) + Number(array[i])
} 
let coposdeagua;
if (numeros == 1) {coposdeagua = ' copo de água'}
else if (numeros != 1) {coposdeagua = ' copos de água'}
return numeros + coposdeagua
}


console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))
console.log(hydrate('1 cachaça, 4 cervejas e 1 copo de vinho'))

module.exports = hydrate
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

console.log(factorial(10))
let stringord = []
function maiorPalavra(string) {
    for (let i = 0; i < string.split(' ').length; i += 1) {
    let lengths = string.split(' ')[i].length
    stringord.push(lengths)
}
    let stringordenada = stringord.sort((a, b) => a - b)
    for (let index = 0; index < string.split(' ').length; index += 1) {
    if (string.split(' ')[index].length == stringordenada[stringordenada.length - 1]) { 
    return string.split(' ')[index]    
    } 
}   
} 

console.log(maiorPalavra('Eu acho extremamente bom'))
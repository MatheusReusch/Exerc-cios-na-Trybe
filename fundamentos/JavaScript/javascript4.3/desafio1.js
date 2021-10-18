let fruits = [3, 4, 10, 1, 12];
let soma = 0;
for (let i = 0; i < fruits.length; i += 1) {
   soma += fruits[i];
   if (soma > 15) {console.log(soma)}
   else {console.log('valor menor que 16')}
}

let n = 5;
let array = [];

if (n > 1)  { for (let i = 1; i <= n; i += 1) {
array.push("*")
}
for (i = 0; i <= n; i += 1) {
    console.log(array);
}
}

let array2 = [];

if (n > 1)  { for (let i = 1; i <= n; i += 1) {
array2.push("*");  console.log(array2)
}
}


let array3 = [];
if (n >= 1) {for (i = 1; i <= n; i += 1) {
array3.push("*")
}}

for (i = 1; i <= n; i += 1) {
    console.log(array3)
}
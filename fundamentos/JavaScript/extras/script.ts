let numero = 9;

for (let index = 1; index <= 9; index += 1) 
{
    console.log(numero * index)
}

let nomes = ['joao','maria','matheus','lucas','joana'] 

for (let index = 0; index < nomes.length; index++) {
    console.log('Bem-vindo ' + nomes[index]);
    
}

let bruto = 3000;
let deducao1;
if (bruto < 1500 && bruto >= 0) {deducao1 = bruto * 0.10}
else if (bruto >= 1501 && bruto <= 1800) {deducao1 = bruto * 0.20}
else if (bruto >= 1801 && bruto <= 2000) {deducao1 = bruto * 0.30}
else if (bruto >= 2001 && bruto <= 3000) {deducao1 = bruto * 0.40}
else if (bruto > 3000) {deducao1 = bruto * 0.50}
else {console.log('valor invalido')}

let base = bruto - deducao1;

let deducao2;

if (base >= 0 && base <= 1000) {deducao2 = 147}
else if (base >= 1001 && base <= 1500) {deducao2 = 211}
else if (base >= 1501 && base <= 2500) {deducao2 = 307}
else if (base >= 2501 && base <= 3000) {deducao2 = 350}
else {deducao2 = 400}

let liquido = bruto - deducao1 + deducao2;
console.log(liquido)

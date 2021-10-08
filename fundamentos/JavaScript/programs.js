console.log('Olá mundo!!')

const a = 2;
const b = 3;
const c = 4;

let adicoes = a + b;
let subtracoes = a - b;
let multiplicacoes = a * b;
let divisao = a / b;
let modulo = a % b;

if (a > b) {console.log(a)}
else if (b > a) {console.log(b)}
else {console.log('erro')}

if (a > b && a > c) {console.log(a)}
else if (b > a && b > c) {console.log(b)}
else if (c > a && c > b) {console.log(c)}
else {console.log('ERRO')}

if (a > 0) {console.log('Positivo')}
else if (a < 0) {console.log('Negativo')}
else {console.log('zero')}

const a1 = 90;
const a2 = 45;
const a3 = 45;

if (a1 < 0 || a2 < 0 || a3 < 0) console.log('ERRO')
else if (a1 + a2 + a3 === 180) {console.log(true)}
else {console.log(false)}

let peça = 'cavalo';

if (peça === 'bispo') {console.log('diagonais')}
else if (peça === 'peao') {console.log('Para frente')}
else if (peça === 'torre') {console.log('Horizontais')}
else if (peça === 'cavalo') {console.log('salto')}
else {console.log('ERROR')}

let nota = 100;

if (nota > 100 || nota < 0) {console.log('invalid')}
else if (nota >= 90) {console.log('A')}
else if (nota >= 80) {console.log('B')}
else if (nota >= 70) {console.log('C')}
else if (nota >= 60) {console.log('D')}
else if (nota >= 50) {console.log('E')}
else if (nota < 50) {console.log('F')}

const joao = 19;
const maria = 20;
const matheus = 18;

if (joao % 2 == 1 || maria % 2 == 1 || matheus % 2 == 1) {console.log(true)}
else {console.log(false)}

const custo = 30;
const impostos = custo * 0.2;
const venda = 40;
const custoTotal = custo + impostos;
const lucro = (venda - custoTotal) * 1000;
console.log(lucro)

let bruto = 7000;

if (bruto <= 1556.94) {deducao1 = bruto * 0.08}
else if (bruto >= 1556.95 && bruto <= 2594.92) {deducao1 = bruto * 0.09}
else if (bruto >= 2594.93 && bruto <= 5189.82) {deducao1 = bruto * 0.11}
else if (bruto > 5189.82) {deducao1 = 570.88}

let base = bruto - deducao1;

if (base < 1903.98) {deducao2 = 0}
else if (base >= 1903.99 && base <= 2826.65) {deducao2 = (base * 0.075) - 142.80}
else if (base >= 2826.65 && base <= 3751.05) {deducao2 = (base * 0.15) - 354.80}
else if (base >= 3751.06 && base <= 4664.68) {deducao2 = (base * 0.225) - 636.13}
else if (base > 4664.68) {deducao2 = (base * 0.275) - 869.36}

let liquido = bruto - deducao1 - deducao2;

console.log(liquido)

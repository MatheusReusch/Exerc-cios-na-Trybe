/*
01 - Mensagem codificada 
Escreva um algoritmo que recebe uma string e retorne outra string com o index dos respectivos caracteres multiplicado por 3.
Exemplo:
---------
Entrada:
"Trybe"
Saída:
"036912".
---------
*/

function encode(string){
    let entrada = "";
    for (index = 0; index < entrada.length; index += 1) { 
        entrada = entrada + index * 3;  
}
return entrada
}
  
  module.exports = encode;
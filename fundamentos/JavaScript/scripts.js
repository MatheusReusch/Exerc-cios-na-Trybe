console.log('Olá mundo!!!')
const nota = 50;
if(nota >= 80) {console.log("Parabéns, você foi aprovada(o)!")}
else if (nota >= 60 && nota < 80) {console.log("Você está na nossa lista de espera")}
else {console.log("Você foi reprovada(o)")}
const comida = true;
const bebida = true;
if (comida == true && bebida == true) {console.log('Obrigado')}
else {console.log('opa')}
const currentHour = 5;
let message = '';
if (currentHour >= 22) {message = "Não deveríamos comer nada, é hora de dormir"}
else if (currentHour >= 18 && currentHour < 22) {message ="Rango da noite, vamos jantar :D"}
else if (currentHour >= 14 && currentHour < 18) {message="Vamos fazer um bolo pro café da tarde?"}
else if (currentHour > 11 && currentHour < 14) {message="Hora do almoço!!!"}
else if (currentHour > 4 && currentHour < 11) {message="Hmmm, cheiro de café recém passado"}
let weekDay = 'quarta';
if (weekDay == 'segunda' || 'terca' || 'quarta' || 'sexta') {console.log("Oba, mais um dia de aprendizado na Trybe >:D")}
else {console.log("FINALMENTE, descanso merecido UwU")}
console.log
console.log(message) 

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  for (const property in coolestTvShow) {
    console.log(property);
  }
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons
  
  // for (const property in coolestTvShow) {
  //   console.log(property);
  // }
  
  console.log(Object.keys(coolestTvShow));
  
  // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

  var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
let resposta = '';
  function habs (object) {
    for (let i = 0; i < Object.keys(object).length; i += 1) {  
    resposta = resposta + `${Object.keys(object)[i]} Nível: ${object[Object.keys(object)[i]]}, `
    
}  return resposta;
}

console.log('Estudante 1');
console.log(habs(student1))

console.log('Estudante 2');
console.log(habs(student2))
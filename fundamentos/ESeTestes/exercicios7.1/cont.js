let userName = "Isabella";
let userName = "Lucas";
console.log(userName); // Resultado: Lucas

if (true) {
    // inicio do escopo do if
    var userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

  const favoriteLanguage = "Javascript";
  favoriteLanguage = "Python";
  console.log(favoriteLanguage); // Erro
  
  let favoriteTechnology = "Machine learning";
  favoriteTechnology = "Facial recognition";
  console.log(favoriteTechnology); // Facial recognition  
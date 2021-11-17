function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const resultado = (number, action) => {
    action(number)
  };
  
  const acao = (number) => {
        if (number === randomIntFromInterval(1, 2)) {
            console.log('Parabéns!!') 
        }
        else {
            console.log('Errouuu!!')
        }
     }

  resultado(2, acao)
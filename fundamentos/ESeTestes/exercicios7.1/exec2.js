const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescente = () => {
    oddsAndEvens.sort((a, b) => a - b)
    return oddsAndEvens;
}

console.log(`Os números ${crescente()} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
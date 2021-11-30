const fetch = require('node-fetch');
const { versions } = require('process');

const fetchpokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/charmander'

    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.sprites.front_default))
    .catch((error) => console.log('O erro é: ' + error))
} 

fetchpokemon();
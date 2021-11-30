const fetch = require('node-fetch');

const fetchcep = async() => {
    const url = 'https://viacep.com.br/ws/22050900/json/'

    fetch(url)
    .then((data) => data.json())
    .then((data) => console.log(data.localidade + ' - ' + data.uf))
    .catch((error) => console.log(error))
}

fetchcep();
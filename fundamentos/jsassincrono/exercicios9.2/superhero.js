//const fetch = require('node-fetch')

function supInfo() {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/489'
    const object = {
        method: 'GET'
    }

    fetch(url, object)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

supInfo();


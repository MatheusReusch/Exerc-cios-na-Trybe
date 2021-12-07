const fetch = require('node-fetch')

const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador#json'

function fetchProducts() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results)
    })
}

fetchProducts()
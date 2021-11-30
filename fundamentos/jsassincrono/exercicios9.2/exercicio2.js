//const fetch = require('node-fetch')

const url = 'https://api.coincap.io/v2/assets'

let moedas = document.getElementById('moedas')

const object = {
        method: 'GET'
    }

function crypto() {

    fetch(url, object)
    .then((response) => response.json())
    .then((data) => {
     for (let i = 0; i < 15; i += 1) {
        let moeda = document.createElement('li')
        moeda.innerHTML = data.data[i].name + ' - ' + (Math.ceil(data.data[i].priceUsd * br)) + ' Reais'
        moedas.appendChild(moeda)
        //console.log(moeda)
     } crypto2()  
    })
}
const moedas2 = document.getElementById('moedas2')
function crypto2() {

    fetch(url, object)
    .then((response) => response.json())
    .then((data) => {
     for (let i = 0; i < 15; i += 1) {
        let moeda2 = document.createElement('li')
        moeda2.innerHTML = data.data[i].name + ' - ' + (Math.ceil(data.data[i].priceUsd)) + ' Dólares'
        moedas2.appendChild(moeda2)
        //console.log(moeda)
     }   
    })
}

const url2 = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`

let br;

function brCrypto() {

    fetch(url2)
    .then((response) => response.json())
    .then((data) => {
         br = data.usd.brl
    })
}

brCrypto();

crypto()




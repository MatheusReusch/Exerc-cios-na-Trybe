//const fetch = require('node-fetch')

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const object = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
  }

  fetch(API_URL, object)
  .then((response) => response.json())
  .then((data) => {
      document.getElementById('jokeContainer').innerHTML = data.joke
      console.log(data.joke)
  })
};


window.onload = () => fetchJoke();


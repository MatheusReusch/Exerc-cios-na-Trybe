const fetch = require('node-fetch')

function supInfo(url) {
    let result;
    const object = {
        method: 'GET'
    }

    result = fetch(url, object)
    .then((response) => response.json())
    .then((data) => {
     return data.name
    })
    .catch((error) => {
        return error
    }); 
    return result 
}

module.exports = supInfo
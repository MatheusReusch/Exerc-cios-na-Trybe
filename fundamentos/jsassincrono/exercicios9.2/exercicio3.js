const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'

function fraseKanye() {
    const object = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    }

    fetch(url, object)
    .then((response) => response.json())
    .then((data) => {
        const img = document.getElementById('imagem')
        const p = document.getElementById('frase') 
        img.src = data.cards[0].image
        p.innerHTML = 'Carta sorteada'
    })
}

fraseKanye();
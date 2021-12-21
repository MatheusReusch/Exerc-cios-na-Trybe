import React from "react";
import { Link } from "react-router-dom";


class Favoritos extends React.Component {
    componentDidMount() {

    }
    
    render () {
        let array = []
        for (let i = 0; i < document.getElementsByClassName('field').length; i += 1) {
            if (document.getElementsByClassName('field')[i].firstChild.nextSibling.nextSibling.nextSibling.src === 'https://cdn.pixabay.com/photo/2013/07/13/10/22/star-157086_1280.png') {
                array.push(document.getElementsByClassName('field')[i])
        }
        }
        console.log(array[0].innerHTML)
        return (
          <div>
          <h1>Favoritos</h1>
          <>{array.map((poke) => {
              console.log(poke.firstChild.innerText)
            return <fieldset>
                <li>{poke.firstChild.innerText}</li>
                <li>{poke.firstChild.nextSibling.innerText}</li>
                <img alt='imagem do pokemon' src={poke.firstChild.nextSibling.nextSibling.src}></img>
            </fieldset>
          })}</>
          <Link to='/'>Pokedéx</Link>  
          </div>
        )
    }
}

export default Favoritos

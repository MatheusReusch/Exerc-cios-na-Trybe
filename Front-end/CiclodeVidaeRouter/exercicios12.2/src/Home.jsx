import React from 'react'
import { Link } from 'react-router-dom'
import pokemons from './data'

class Home extends React.Component {
   constructor () {
       super()

       this.handleChange = this.handleChange.bind(this)

       this.state = {
           fav: false
       }
   }

   handleChange(event) {
     if (event.target.checked === true) {
        event.target.parentNode.previousSibling.src = 'https://cdn.pixabay.com/photo/2013/07/13/10/22/star-157086_1280.png'
     }
     if (event.target.checked === false) {
        event.target.parentNode.previousSibling.src = 'https://a-static.mlcdn.com.br/1500x1500/conjunto-de-tacas-de-vidro-para-cerveja-6-pecas-300ml-nadir-floripa-7732/bellamagazineroma/bd53a1f6286311ec93264201ac185049/f3241878f812a2669ceebd513a1d2b53.jpg'
     }
   }

    render () {
        let pokes = pokemons.map((poke) => {
            let url = `/pokemons/${poke.id}`
            return <fieldset className='field'>
              <li>{poke.name}</li>
              <li>{poke.type}</li>
              <img alt='imagem do pokemon' src={poke.image}></img>
              <img alt='favoritado' src='https://a-static.mlcdn.com.br/1500x1500/conjunto-de-tacas-de-vidro-para-cerveja-6-pecas-300ml-nadir-floripa-7732/bellamagazineroma/bd53a1f6286311ec93264201ac185049/f3241878f812a2669ceebd513a1d2b53.jpg' className='star'></img>
              <label>
                Pokemon favoritado 
                <input id={poke.name} onChange={this.handleChange} type='checkbox'></input>
              </label>
              <Link to={url}>More details</Link>
            </fieldset>
        })
        return (
            <div>
            <p>Minha Home Page</p>
            <Link to='/about'>Sobre Mim</Link>
            <Link to='/users/13334'>Usuário</Link>
            <Link to='/movies/Cabana do medo'>Filmes</Link>
            <Link to='/access'>Acessar conta</Link>
            <Link to='/aboutpokedex'>Sobre a Pokedex</Link>
            <Link to='/favoritos'>Pokemons Favoritos</Link>
            {pokes}
            </div>
        )
    }
}

export default Home

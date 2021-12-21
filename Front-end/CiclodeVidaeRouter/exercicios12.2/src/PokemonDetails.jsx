import React from "react";
import { Link } from "react-router-dom";
import pokemons from "./data";

class PokemonDetails extends React.Component {
    render () {
        let id = this.props.match.params.id
        let pokemon = pokemons.find((poke) => poke.id === Number(id))
        return (
          <div>   
          <h1>{pokemon.name}</h1>
          <p>{pokemon.type}</p>
          <p>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
          <img alt='imagem do pokemon' src={pokemon.image}></img>
          <a rel="noreferrer" href={pokemon.moreInfo} target='_blank'>Mais informações</a>
          <Link to='/'>Pokedéx</Link>
          </div>
        )
    }
}

export default PokemonDetails

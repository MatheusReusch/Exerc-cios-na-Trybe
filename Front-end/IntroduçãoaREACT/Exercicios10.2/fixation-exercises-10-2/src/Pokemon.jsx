import React from 'react'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render () {
      const pokemon = this.props.pokemon
      return (
          <fieldset className='fieldset'>
            <legend>Pokemon</legend>
              <li key={pokemon.name}>{pokemon.name}</li>
              <li key={pokemon.type}>{pokemon.type}</li>
              <li key={pokemon.averageWeight.value}>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</li>
              <li className='imagem' key={pokemon.image}><img src={pokemon.image} alt='imagem do pokemon' ></img></li>
          </fieldset>
      )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default Pokemon
import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types'

class Pokedex extends React.Component {
    render () {
        const objetos = this.props.objetos

        return objetos.map((pokemon) => <Pokemon pokemon={pokemon} />)
    }
}

Pokedex.propTypes = {
    objetos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokedex
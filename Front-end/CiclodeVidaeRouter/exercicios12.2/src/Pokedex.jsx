import React from "react";
import { Link } from "react-router-dom";

class Pokedex extends React.Component {
    render () {
        return (
          <>
          <h1>Pokedéx</h1>
          <p>A Pokédex, também conhecida como Poké-Agenda no Brasil (e ainda como Dexter ou Dextette, dependendo da voz masculina ou feminina do aparelho) é uma enciclopédia virtual portátil de alta tecnologia que os treinadores Pokémon transportam para registra todas as espécies diferentes de Pokémon que são encontradas durante a sua viagem como treinadores. Em geral, quando são cumpridos determinados requisitos, a capacidade pode ser aumentada permitindo que a Pokédex possa armazenar dados de outros Pokémon, que não são comuns, assim como os Pokémon de outras regiões.</p>
          <img alt='imagem de uma pokedex' src='http://1.bp.blogspot.com/-LizoMRGaQ_c/UPIU6UknFXI/AAAAAAAAAUs/KKDynTNuwoo/w1200-h630-p-k-no-nu/pokedex-pro.png'></img>
          <Link to='/'>Pokedéx</Link>
          </>
        )
    }
}

export default Pokedex

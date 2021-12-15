import React from 'react'
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

const cores = [
  {
      name: 'red'
  },
  {
      name: 'green'
  },
  {
      name: 'yellow'
  },
  {
      name: 'purple'
  },
  {
      name: 'pink'
  },
  {
      name: 'black'
  },
  {
      name: 'brown'
  }
]

class App extends React.Component {
  constructor () {
    super ()
    this.print1 = this.print1.bind(this)
    this.print2 = this.print2.bind(this)
    this.print3 = this.print3.bind(this)
    this.next = this.next.bind(this)
    this.fire = this.fire.bind(this)
    this.psychic = this.psychic.bind(this)
    this.all = this.all.bind(this)
    this.dragon = this.dragon.bind(this)
    this.update = this.update.bind(this)

    this.state = {
      numeroDeCliques1: 1,
      numeroDeCliques2: 2,
      numeroDeCliques3: 3,
      indice: 0,
      fire: 0,
      fire1: 0,
      psychic: 0,
      psychic1: 0,
      dragon: 0,
      dragon1: 0,
      filter: '' 
  }
} 
  print1 () {
    this.setState((state, _props) => ({
      numeroDeCliques1: state.numeroDeCliques1 + 1
    }))
  }
  
  print2 () {
    this.setState((state, _props) => ({numeroDeCliques2: state.numeroDeCliques2 + 1}))
  }
  
  print3 () {
    this.setState((state, _props) => ({numeroDeCliques3: state.numeroDeCliques3 + 1}))
    if (this.state.numeroDeCliques3 % 2 === 1) {
      document.getElementById('btn3').style.backgroundColor = 'green'
    }
    if (this.state.numeroDeCliques3 % 2 === 0) {
      document.getElementById('btn3').style.backgroundColor = ''
    }
  }

  next() {
    if (this.state.fire === 1) {
      const achar = pokemons.filter((poke) => poke.type === 'Fire')
      let array = achar.map((pokes) => pokemons.indexOf(pokes))
      let array2 = array.concat(array)
      this.setState((state, _props) => ({indice: array2[this.state.fire1] - 1, fire1: state.fire1 + 1}))
      if (this.state.fire1 === array.length) {this.setState((state, _props) => ({indice: array[0] - 1, fire1: 1}))}
    }

    if (this.state.psychic === 1) {
      const achar = pokemons.filter((poke) => poke.type === 'Psychic')
      let array = achar.map((pokes) => pokemons.indexOf(pokes))
      let array2 = array.concat(array)
      this.setState((state, _props) => ({indice: array2[this.state.psychic1] - 1, psychic1: state.psychic1 + 1,}))
      if (this.state.psychic1 === array.length) {this.setState((state, _props) => ({indice: array[0] - 1, psychic1: 1}))}
    }

    if (this.state.dragon === 1) {
      const achar = pokemons.filter((poke) => poke.type === 'Dragon')
      let array = achar.map((pokes) => pokemons.indexOf(pokes))
      let array2 = array.concat(array)
      this.setState((state, _props) => ({indice: array2[this.state.dragon1] - 1, dragon1: state.dragon1 + 1,}))
      if (this.state.dragon1 === array.length) {this.setState((state, _props) => ({indice: array[0] - 1, dragon1: 1}))}
    }
    
    if (this.state.indice === pokemons.length - 1) {
      this.setState((state, _props) => ({indice: 0}))
    }
    else {
      this.setState((state, _props) => ({indice: state.indice + 1}))
    }
  }

  fire() {
    this.setState((state, _props) => ({fire: 1, psychic: 0, dragon: 0}))
    pokemons.push({teste: 0})
  }

  psychic() {
    this.setState((state, _props) => ({fire: 0, psychic: 1, dragon: 0}))
    pokemons.push({teste: 0})
  }

  dragon() {
    this.setState((state, _props) => ({fire: 0, psychic: 0, dragon: 1}))
    pokemons.push({teste: 0})
  }

  all() {
    this.setState((state, _props) => ({fire: 0, psychic: 0, dragon: 0}))
    while (Object.keys(pokemons[pokemons.length - 1]).length === 1) {
      pokemons.pop()
    }
  }

  update(event) {
    const alvo = event.target
    this.setState((state, _props) => ({filter: alvo.value}))
  }

  render () {
    return (
    <>
    <button onClick={this.print1}>{this.state.numeroDeCliques1}</button>
    <button onClick={this.print2}>{this.state.numeroDeCliques2}</button>
    <button id='btn3' onClick={this.print3}>{this.state.numeroDeCliques3}</button>
    <section id='aplicacao'>
    <h1>Pokemons</h1>
    <fieldset><Pokemon pokemon={pokemons[this.state.indice]} /></fieldset>
    </section>
    <section id='botoes'>
    <button className='btn' onClick={this.next}>Próximo Pokemon</button>
    </section>
    <h2>Filtros</h2>
    <section id='filtro'>
    <button className='btn' onClick={this.fire}>Fire</button>
    <button className='btn' onClick={this.psychic}>Psychic</button>
    <button className='btn' onClick={this.dragon}>Dragon</button>
    <button className='btn' onClick={this.all}>All</button>
    </section>
    <section id='search'>
    <h2>Search colors</h2>
    <input onChange={this.update} type='text'></input>
    {cores.filter((cor) => cor.name.includes(this.state.filter)).map((cors) => <li key={cors.name}>{cors.name}</li>)}
    </section>
    </>
  );
}
}

export default App;

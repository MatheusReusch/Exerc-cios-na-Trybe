import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route } from 'react-router-dom';
import Movies from './Movies';
import StrictAccess from './StrictAccess';
import PokemonDetails from './PokemonDetails';
import Pokedex from './Pokedex';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning' />}></Route>
        <Route path='/movies/:ship' render={(props) => <Movies {...props} movies={['Titanic', 'Piratas do caribe', 'Homem-aranha']}/>}></Route>
        <Route path='/access' render={() => <StrictAccess user={{name: 'joao', password: '1234'}} />}></Route>
        <Route path='/pokemons/:id' render={(props) => <PokemonDetails {...props} />}></Route>
        <Route path='/aboutpokedex' component={Pokedex}></Route>
      </BrowserRouter>
    );
  }
}

export default App;

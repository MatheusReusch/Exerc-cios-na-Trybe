import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export const About = () => <h1 data-testid='sobre'>Você está na página Sobre</h1>;
export const Home = () => <h1 data-testid='inicio'>Você está na página Início</h1>;
export const NoMatch = () => <h1 data-testid='undefined'>Página não encontrada</h1>;

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link data-testid='linkSobre' to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

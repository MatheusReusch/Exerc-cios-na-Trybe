// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      nome: '',
      email: ''
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const { joke } = this.state;
    const { nome, email } = this.state;
    return (
      <>
      <div className="App">
        {joke}
      </div>
      <div>
      <h1>Teste de inputs</h1>
      <p>
        <label htmlFor="nome">
          Nome
          <input
            data-testid='inputNome'
            type="text"
            id="nome"
            name="nome"
            value={ nome }
            onChange={ (e) => this.handleInput(e) }
          />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          Email:
          <input
            data-testid='inputEmail'
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={ (e) => this.handleInput(e) }
          />
        </label>
      </p>
    </div>
    </>
    );
  }
}

export default App;

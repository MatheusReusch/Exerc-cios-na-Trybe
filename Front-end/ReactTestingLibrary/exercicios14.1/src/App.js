import './App.css';
import React from 'react';
import ValidEmail from './ValidEmail';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.tiraNone = this.tiraNone.bind(this)
    this.colocaNone = this.colocaNone.bind(this)
    this.addTodo = this.addTodo.bind(this);

    this.state = {
      saveEmail: '',
      saveEmail2: '',
      listTodo: [],
    }
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  tiraNone() {
    this.setState({saveEmail: '', saveEmail2: this.state.saveEmail})
  }

  colocaNone() {
    this.setState({saveEmail2: ''})
  }
  
  render () {
    const { listTodo } = this.state;
    return (
      <>
        <label>
          Email:
          <input name='saveEmail' value={this.state.saveEmail} onChange={this.handleChange} placeholder='Seu email' type='email'></input>  
        </label>
        <button onClick={this.tiraNone} data-testid="id-send">Salvar email</button>
        <button data-testid='remove' onClick={this.colocaNone} value='Voltar'>Voltar</button>
        <ValidEmail email={this.state.saveEmail2}/>
        <div className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        {listTodo && (
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={ index + 1 }>
                  <Item content={ todo } />
                </li>
              ))
            }
          </ul>
        )}
      </div>
      </>
    );
  }

}

export default App;

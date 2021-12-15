import React from 'react';
import './App.css';
import Sobre from './Sobre';

class App extends React.Component {
  constructor() {
    super()
    
    this.handleChange = this.handleChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.findErro = this.findErro.bind(this)
    this.tirarErro = this.tirarErro.bind(this)
    
    this.state = {
      nome: '',
      framework: '',
      number: 0,
      textarea: '',
      checkbox: false,
      textarea2: '',
      number2: 0,
      formularioComErros: false
    }
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState((state, _props) => ({[name]: value}))

    if (name === 'textarea2' && value.length <= 20) {
      if (value >= 0 && name === 'number2') {
        this.tirarErro()
      }
    }

    if (value >= 0 && name === 'number2') {
      this.tirarErro()
    }

    if (value < 0 && name === 'number2') {
      this.findErro()
    }
    
    if (name === 'textarea2' && value.length > 20) {
      this.findErro()
    }
  }

  handleCheck(event) {
    const {name, checked} = event.target
    this.setState((state, _props) => ({[name]: checked}))
  }

  findErro() {
    this.setState((state, _props) => ({formularioComErros: true}))
  }

  tirarErro() {
    this.setState((state, _props) => ({formularioComErros: false}))
  }

  render() {
    return (
      <form>
        <fieldset id='form'>
        <select name={'framework'} value={this.state.framework} onChange={this.handleChange}>
          <option>React</option>
          <option>Angular</option>
          <option>Vue</option>
        </select>
        <input name={'nome'} value={this.state.nome} onChange={this.handleChange} type='text'></input>
        <input name={'number'} value={this.state.number} onChange={this.handleChange} type='number'></input>
        <textarea name={'textarea'} value={this.state.textarea} onChange={this.handleChange}></textarea>
        <label>
        Gostei
        <input name={'checkbox'} value={this.state.checkbox} type='checkbox' onChange={this.handleCheck}></input>
        </label>
        <input type='file'></input>
        </fieldset>
        <section id='form'>
        <Sobre handleChange={this.handleChange} value1={this.state.textarea2} value2={this.state.number2} findErro={this.findErro} />
        </section>
      </form>
   );
  }
}

export default App;

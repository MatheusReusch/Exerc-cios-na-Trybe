import React from 'react';
import './App.css';
import Sobre from './Sobre';
import NewTopic from './NewTopic';
import Cartoes from './Cartoes'

let cartoes = []

class App extends React.Component {
  constructor() {
    super()
    
    this.handleChange = this.handleChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.findErro = this.findErro.bind(this)
    this.tirarErro = this.tirarErro.bind(this)
    this.generate = this.generate.bind(this)
    this.limpar = this.limpar.bind(this)
    this.generate2 = this.generate2.bind(this)
    this.remove = this.remove.bind(this)
    
    this.state = {
      nome: '',
      framework: '',
      number: 0,
      textarea: '',
      checkbox: false,
      textarea2: '',
      number2: 0,
      materia: '',
      nome2: '',
      bloco: '',
      av: 0,
      check2: false,
      valueimg: '',
      formularioComErros: false,
      filter: ''
    }
  }

  async handleChange(event) {
    const {name, value} = event.target
    await this.setState((state, _props) => ({[name]: value}))
  
    if (document.getElementById('erro1').innerText.length > 3 || document.getElementById('erro2').innerText.length > 3
    || document.getElementById('erro4').innerText.length > 3 || document.getElementById('erro5').innerText.length > 3
    || document.getElementById('opa1').innerText.length > 3) {
      this.setState((state, _props) => ({formularioComErros: true}))
    }
    else {
      this.setState((state, _props) => ({formularioComErros: false}))
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

  generate() {
    if (this.state.formularioComErros === true) {
      document.getElementById('recla').className = ''
    }
    else {
      document.getElementById('recla').className = 'none'
    return (
      document.getElementById('vai').className = ''
    )
  }
  }

 generate2() {
    if (this.state.formularioComErros === true) {
      alert('Há erros no formulário! Revise por favor!')
    }
    else {

    cartoes.push({
      nomeDoBloco: this.state.bloco,
      autoAv: this.state.av,
      imgSrc: this.state.valueimg,
      check: this.state.check2.toString()
    })

    this.setState((state, _props) => ({av: 0}))
  }
    
  }

  limpar() {
    return (
      document.getElementById('vai').className = 'none'
    )
  }

  remove(event) {
    const elemento = event.target.previousSibling.previousSibling.previousSibling.previousSibling
    const index = cartoes.indexOf(cartoes.find((bloco) => bloco.nomeDoBloco === elemento.parentNode.firstChild.innerText.split(' ')[3]))
    cartoes.splice(index, 1)
    this.setState({av: 0})
  }

  render() {
    const desc = this.state.textarea2
    const age = this.state.number2
    return (
      <>
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
        <Sobre nome2={this.state.nome2} materia={this.state.materia} handleChange={this.handleChange} value1={this.state.textarea2} value2={this.state.number2} findErro={this.findErro} />
        </section>
        </form>
      <button onClick={this.generate}>Gerar Curriculo</button>
      <button onClick={this.limpar}>Limpar</button>
      <span id='recla' className='none'>Formulário com Erros!</span>
      <div id='vai' className='none'>
        <span>Seu nome: {this.state.nome2}</span> <br></br>
        <span>Descrição: {desc}</span> <br></br>
        <span>Idade: {age}</span> <br></br>
        <span>Matérias preferidas: {this.state.materia}</span>
        </div>
        <section id='aplicativo'>
        <NewTopic valueimg={this.props.valueimg} valuecheck2={this.state.check2} valueav={this.state.av} valuebloco={this.state.bloco} handleCheck={this.handleCheck} handleChange={this.handleChange} />
        <button onClick={this.generate2}>Gerar cartão</button>
        <label>
        Filtrar:
        <input onChange={this.handleChange} name={'filter'} value={this.state.filter} type='text'></input>
        </label>
        </section>
        <section id='blocos'>
        <Cartoes filter={this.state.filter} remove={this.remove} key={this.state.bloco} array={cartoes} />
        </section>
      </>
   );
  }
}

export default App;

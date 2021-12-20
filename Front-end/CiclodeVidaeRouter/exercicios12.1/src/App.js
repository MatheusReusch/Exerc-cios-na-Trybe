import React from 'react'
import './App.css';
import Timer from './Timer';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.fetchCharacters = this.fetchCharacters.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
    this.renderUser = this.renderUser.bind(this)
    this.savePerson =  this.savePerson.bind(this)
    this.generatePerson = this.generatePerson.bind(this)
    this.desativaBotao = this.desativaBotao.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.fetchDog = this.fetchDog.bind(this)
    this.renderDogs = this.renderDogs.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      chracters: [],
      loading: true,
      user: '',
      pessoas: [],
      storedPessoas: [],
      mostrar: true,
      disableButton: false,
      dog: [],
      namedog: '',
      loading2: false
    }
  }

  fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
     this.setState({chracters: data.results})
    })
  }

  fetchUser() {
    this.setState(
      {loading: true},
      async () => {
        fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState, _props) => ({loading:false, pessoas: [...prevState.pessoas, data.results]}))
      }
      )
      }
    )  
  }

  renderUser() {
    return this.state.pessoas.map((pessoa) => {
      return <>
      <p key={pessoa[0].last}>{pessoa[0].email + ' ' + pessoa[0].name.first + ' ' + pessoa[0].name.last + ' ' + pessoa[0].dob.age}</p>
      <img key={pessoa[0].first} alt='foto' src={pessoa[0].picture.thumbnail}></img>
      </>
    })
  }

  savePerson() {
    this.setState(
      this.fetchUser(),
      () => ({loading: false})
    )
  }

  desativaBotao() {
    this.setState({disableButton: true})
  }

  shouldComponentUpdate(nextProps, nextState) {
    let proxima = nextState.pessoas[nextState.pessoas.length - 1]
    if (proxima !== undefined) {
     if (proxima[0].dob.age > 100) { 
      document.getElementById('btn').disabled = 'true'
      document.getElementById('btn2').style.color = 'red'
      return false
     }
     if (proxima[0].dob.age <= 60) { 
      document.getElementById('btn').disabled = false
      document.getElementById('btn2').style.color = ''
      return true
     }
    }
    return true
  }

  generatePerson() {
    this.state.pessoas.pop()
    this.fetchUser()
  }

  handleTimer() {
    this.setState((prevState, _props) => ({mostrar: !prevState.mostrar}))
  }

  fetchDog() {
    this.setState(
      {loading2: true},
      () => { fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        if (data.message.includes('terrier')) {
          return alert('Este é um dog da raça Terrier')
        }
        else {
        this.setState((prevState, _props) => ({
          loading2: false,
          dog: [...prevState.dog, data.message]
        }))
      localStorage.setItem('lastDog', data.message)}
      })}
    )
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  renderDogs() {
    return this.state.dog.map((dog) => <><p>Nome: {this.state.namedog}</p><img alt='imagem do dog' key={dog} src={dog}></img></>)
  }

  componentDidMount() {
    this.fetchCharacters()
    this.fetchUser()
    this.fetchDog()
  }
  
  render () {
    const loadingElement = <p>Loading...</p>
    return (
         <>
         <section id='doginhos'>
         <button onClick={this.fetchDog}>Gerar outro dog</button>
         <input onChange={this.handleChange} name={'namedog'} value={this.state.namedog} placeholder='Dê um nome ao seu doguinho' type='text'></input>
          {this.state.loading2 ? loadingElement : this.renderDogs()}
         </section>
         <section id='contador'>
           <h1>Trybem estar</h1>
           {this.state.mostrar ? null : <Timer />}
           <button onClick={this.handleTimer}>{this.state.mostrar ? 'Ligar Timer' : 'Desligar Timer'}</button>
         </section>
         <section id='pessoas'>
         <>{this.state.loading ? loadingElement : this.renderUser()}</>
         <button id='btn' onClick={this.savePerson}>Salvar pessoa</button>
         <button id='btn2' onClick={this.generatePerson}>Gerar outra pessoa</button>
         </section>
         <div>{this.state.chracters.map((pessoa) => {
           return <div key={pessoa.id}><p >{pessoa.name}</p><img alt='imagem' src={pessoa.image}></img></div>
         })}</div>
         </>
      );
  }

}

export default App;

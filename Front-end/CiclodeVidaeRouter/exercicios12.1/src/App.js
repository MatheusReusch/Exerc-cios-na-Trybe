import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.fetchCharacters = this.fetchCharacters.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
    this.renderUser = this.renderUser.bind(this)
    this.savePerson =  this.savePerson.bind(this)
    this.generatePerson = this.generatePerson.bind(this)
    this.desativaBotao = this.desativaBotao.bind(this)

    this.state = {
      chracters: [],
      loading: true,
      user: '',
      pessoas: [],
      storedPessoas: [],
      disableButton: false
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
      <img alt='foto' src={pessoa[0].picture.thumbnail}></img>
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
     if (proxima[0].dob.age > 60) { 
      document.getElementById('btn').disabled = 'true'
      return false
     }
     if (proxima[0].dob.age <= 50) { 
      document.getElementById('btn').disabled = false
      console.log(document.getElementById('btn').disabled)
      return true
     }
    }
    return true
  }

  generatePerson() {
    this.state.pessoas.pop()
    this.fetchUser()
  }

  componentDidMount() {
    this.fetchCharacters()
    this.fetchUser()
  }
  
  render () {
    const loadingElement = <p>Loading...</p>
    return (
         <>
         <section id='pessoas'>
         <>{this.state.loading ? loadingElement : this.renderUser()}</>
         <button id='btn' onClick={this.savePerson}>Salvar pessoa</button>
         <button onClick={this.generatePerson}>Gerar outra pessoa</button>
         </section>
         <div>{this.state.chracters.map((pessoa) => {
           return <div key={pessoa.id}><p >{pessoa.name}</p><img alt='imagem' src={pessoa.image}></img></div>
         })}</div>
         </>
      );
  }

}

export default App;

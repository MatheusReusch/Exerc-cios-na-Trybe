import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.fetchCharacters = this.fetchCharacters.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
    this.renderUser = this.renderUser.bind(this)
    this.savePerson =  this.savePerson.bind(this)

    this.state = {
      chracters: [],
      loading: false,
      user: '',
      pessoas: [],
      storedPessoas: []
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
      fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => 
      this.setState((prevState, _props) => ({pessoas: [...prevState.pessoas, data.results]}))
      )
  }

  renderUser() {
    return this.state.pessoas.map((pessoa) => {
      return <>
      <p key={pessoa[0].last}>{pessoa[0].email + ' ' + pessoa[0].name.first + ' ' + pessoa[0].name.last + ' ' + pessoa[0].dob.age}</p>
      <img src={pessoa[0].picture.thumbnail}></img>
      </>
    })
  }

  savePerson() {
    this.fetchUser()
  }

  componentDidMount() {
    this.fetchCharacters()
    this.fetchUser()
  }
  
  render () {
    console.log(this.state.chracters)
    console.log(this.state.pessoas)
    return (
         <>
         <section id='pessoas'>
         <>{this.state.pessoas[0] ? this.renderUser() : 'Loading...'}</>
         <button onClick={this.savePerson}>Salvar pessoa</button>
         </section>
         <div>{this.state.chracters.map((pessoa) => {
           return <div key={pessoa.id}><p >{pessoa.name}</p><img alt='imagem' src={pessoa.image}></img></div>
         })}</div>
         </>
      );
  }

}

export default App;

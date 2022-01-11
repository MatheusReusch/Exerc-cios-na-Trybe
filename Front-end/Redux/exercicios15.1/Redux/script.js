const Redux = require('redux')

const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  const NEXT_COLOR = () => ({
    type: 'NEXT',
  })

  const PREVIOUS_COLOR = () => ({
    type: 'PREVIOUS',
  })

  const RANDOM_COLOR = () => ({
    type: 'RANDOM',
  })
  
  const reducer = (state = ESTADO_INICIAL, action) => {
    if (action.type === 'NEXT') {
      return {
        ...state,
        index: state.index === 6 ? 0 : state.index + 1
      }
    }
    else if (action.type === 'PREVIOUS') {
        return {
          ...state,
          index: state.index === 0 ? 0 : state.index - 1
        }
      }
      else if (action.type === 'RANDOM') {
        return {
          ...state,
          colors: [...state.colors, criarCor()],
          index: state.colors.length
        }
      }
    else {
        return state;
    }
  }
  
  const store = Redux.createStore(reducer)

  store.dispatch(NEXT_COLOR())
  store.dispatch(NEXT_COLOR())
  store.dispatch(PREVIOUS_COLOR())
  
  console.log(store.getState())

  function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

store.subscribe(() => {
    console.log('Mudou')
})

store.dispatch(RANDOM_COLOR())

console.log(store.getState())

store.dispatch(RANDOM_COLOR())

console.log(store.getState())

console.log(store.getState().colors[store.getState().index])

const ESTADO_INICIAL_1 = {
    nome: 'Rodrigo',
    sobrenome: 'Santos da Silva',
    endereco: 'Rua Soldado Mathias, 765',
    cidade: 'Belo Horizonte',
  };

  const ESTADO_INICIAL_2 = {
    nome: 'Bruna',
    sobrenome: 'Santana Oliveira',
    endereco: 'Rua Holanda, 332',
    cidade: 'São Paulo',
  };

  const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
    if (action.type === 'CHANGE') {
        return {
            ...state,
            nome: action.nome
        }
    }
    else if (action.type === 'CHANGE2') {
        return {
            ...state,
            sobrenome: action.sobrenome
        }
    }
    else {return state;}
  };

  const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
    return state;
  };

  const juntos = Redux.combineReducers({meuPrimeiroReducer, meuSegundoReducer})

  const store2 = Redux.createStore(juntos)

  console.log(store2.getState())

  const CHANGE_NAME = (name) => ({
    type: 'CHANGE',
    nome: name
  })

  const CHANGE_SECONDNAME = (name) => ({
    type: 'CHANGE2',
    sobrenome: name
  })

  store2.subscribe(() => console.log('Changed'))

store2.dispatch(CHANGE_NAME('Matheusinho'))
store2.dispatch(CHANGE_SECONDNAME('Reuschinho'))

console.log(store2.getState().meuPrimeiroReducer)

import React from "react";

class Cartoes extends React.Component {
    render () {
        const remove = this.props.remove
        const filter = this.props.filter
        const array = this.props.array
        const resultado = array.filter((block) => block.nomeDoBloco.includes(filter)).map((bloco) => {
            return (
              <fieldset id='ap' className='space'>
              <span key={bloco.nomeDoBloco}>Nome do Bloco: {bloco.nomeDoBloco}</span> <br/> 
              <span key={bloco.autoAv}>Autoavaliação: {bloco.autoAv}</span> <br/>
              <span key={bloco.check}>Projeto foi finalizado: {bloco.check}</span> <br/>
              <img key={bloco.imgSrc} id='image' alt='Imagem do bloco' src={bloco.imgSrc}></img>
              <button className='removecard' onClick={remove}>Remover Cartão</button>
              </fieldset>
            )
        })
        return resultado
    }
}

export default Cartoes

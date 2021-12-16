import React from "react";

class NewTopic extends React.Component {
    render () {
        const valuebloco = this.props.valuebloco
        const handleChange = this.props.handleChange
        const valueav = this.props.valueav
        const valuecheck2 = this.props.valuecheck2
        const handleCheck = this.props.handleCheck
        const valueimg = this.props.valueimg
        let opa1 = ''
        
        if (valuebloco.length > 20) {
            opa1 = 'Nome muito extenso'
        }

        return (
          <>
          <h2>Meu App de Estudos</h2>
          <label>
          Nome do Bloco:    
          <input name={'bloco'} value={valuebloco} onChange={handleChange} type='text'></input>
          <span id='opa1'>{opa1}</span>
          </label>
          <label>
              Autoavaliação do Bloco:
              <input name={'av'} onChange={handleChange} value={valueav} min='0' max='5' type='number'></input>
          </label>
          <label>
              Imagem do bloco:(URL)
              <input value={valueimg} onChange={handleChange} name={'valueimg'} type='text'></input>
          </label>
          <label>
            Projeto foi finalizado?
            <input name={'check2'} value={valuecheck2} onChange={handleCheck} type='checkbox'></input>
          </label>
          </>    
        )
    }
}

export default NewTopic

import React from "react";
import './App.css';

class Sobre extends React.Component {
    render () {
        const handleChange = this.props.handleChange
        const textarea = this.props.value1
        const number = this.props.value2
        const materia = this.props.materia
        const nome2 = this.props.nome2
        let error = undefined
        let error3 = ''
        let error4 = ''
        let error5 = ''
        if (number > 50) {
            error = 'Idade muito grande'
        }
        if (number < 0) {
            error = 'Idade muito pequena'
        }
        if (textarea.length > 20) {
            error3 = 'Texto muito grande'
        }
        if (materia.length > 10) {
            error4 = 'Texto muito extenso'
        }
        if (nome2.length > 20) {
            error5 = 'Nome muito extenso'
        }
        return (
            <>
            <label>
                Seu nome:
                <input onChange={handleChange} value={nome2} name={'nome2'} type='text'></input>
                <span id='erro5'>{error5}</span>
            </label>
            <label>
                Descrição:
                <textarea required onChange={handleChange} value={textarea} name={'textarea2'}></textarea>
                <span id='erro1'>{error3}</span>
            </label>
            <label>
                Idade:
                <input name={'number2'} onChange={handleChange} value={number} type='number'></input>
                <span id='erro2' onChange={() => console.log('erro')}>{error}</span>
            </label>
            <label>
                Matérias preferidas:
                <input name='materia' value={materia} onChange={handleChange} type='text'></input>
                <span id='erro4'>{error4}</span>
            </label>
            </>
        )
    }
}

export default Sobre

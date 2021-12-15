import React from "react";
import './App.css';

class Sobre extends React.Component {
    
    render () {
        const handleChange = this.props.handleChange
        const textarea = this.props.value1
        const number = this.props.value2
        let error = undefined
        let error3 = ''
        if (number > 50) {
            error = 'Idade muito grande'
        }
        if (number < 0) {
            error = 'Idade muito pequena'
        }
        if (textarea.length > 20) {
            error3 = 'Texto muito grande'
        }
        return (
            <>
            <label>
                Descrição:
                <textarea onChange={handleChange} value={textarea} name={'textarea2'}></textarea>
                <span>{error3}</span>
            </label>
            <label>
                Idade:
                <input name={'number2'} onChange={handleChange} value={number} type='number'></input>
                <span onChange={() => console.log('erro')}>{error}</span>
            </label>
            </>
        )
    }
}

export default Sobre

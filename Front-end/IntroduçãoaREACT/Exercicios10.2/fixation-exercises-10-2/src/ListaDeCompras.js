import React from "react";

class ListaDeCompras extends React.Component {
    render () {
        const array = this.props.array
        let items = array.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return (
            <section>
              <p key='titulo'>Lista de Compras</p>
              {items}
            </section>
        )
    }
}

export default ListaDeCompras
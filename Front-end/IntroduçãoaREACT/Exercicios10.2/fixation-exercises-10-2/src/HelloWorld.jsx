import React from "react";

class HelloWorld extends React.Component {
    render () {
        const nome = this.props.name
        return <h1>Hello World and {nome}</h1>
    }
}

export default HelloWorld
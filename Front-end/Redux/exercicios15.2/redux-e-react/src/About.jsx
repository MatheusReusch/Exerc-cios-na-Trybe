import React from "react";
import { connect } from "react-redux";
import addLucas from "./actions/addLucas";

class About extends React.Component {
    render() {
        console.log(this.props.listLucas.listLucas)
        return (
            <div>
            <h2>Lista do Lucas:</h2>
            {this.props.listLucas.listLucas.length > 0 ? this.props.listLucas.listLucas.map((item) => <li>{item}</li>) : 'Sem Lucas'}
            <button onClick={() => this.props.addLucas()}>Add Lucas</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listLucas: state.listLucasReducer
})

const mapDispatchToProps = dispatch => ({
    addLucas: () => dispatch(addLucas())
})

export default connect(mapStateToProps, mapDispatchToProps)(About)

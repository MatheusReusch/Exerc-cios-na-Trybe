import React from "react";
import { connect } from "react-redux";
import add from "./actions";

class Home extends React.Component {
    render() {
        console.log(this.props.list.list)
        return (
            <>
            {this.props.list.list.length > 0 ? this.props.list.list.map((item) => <li>{item}</li>) : 'Lista vazia'}
            <button onClick={() => this.props.myFirstDispatch('Matheus')}>Add</button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    list: state.listReducer});

const mapDispatchToProps = dispatch => ({
   myFirstDispatch: (state) => dispatch(add(state)) 
})

    export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class StrictAccess extends React.Component {
    componentDidMount() {
        const user = this.props.user
        if (user.name !== 'joao' || user.password !== '1234') {
            alert('Access Denied')
        }
    }
    
    render () {
        const user = this.props.user
        return (
          <div>
          <p>{user.name !== 'joao' || user.password !== '1234' ? <Redirect to='/' /> : 'Bem vindo João' }</p>
          <Link to='/'>Home page</Link>
          </div>
        )
    }
}

export default StrictAccess

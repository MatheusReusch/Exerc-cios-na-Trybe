import React from "react";
import PropTypes from 'prop-types'

class UserProfile extends React.Component {
    render () {
        const { name, email, avatar} = this.props.objeto
        return (
        <>
        <p key={name}>O nome é {name} e o email é {email}</p>
        <img  key={avatar} alt='imagem da pessoa' src={avatar}></img>
        </>
        )
    }
}

UserProfile.propTypes = {
    objeto: PropTypes.object.isRequired
}

export default UserProfile
import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
    render () {
        return (
            <>
            <p>Sou estudante da UFRGS</p>
            <Link to='/'>Home page</Link>
            </>
        )
    }
}

export default About

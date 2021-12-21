import React from "react";
import { Link } from "react-router-dom";

class Movies extends React.Component {
    render () {
        const movies = this.props.movies
        const movies2 = this.props.match.params.ship
        return (
           <>
          <ul>
              {movies.map((filme) => <li>{filme}</li>)}
              <li>{movies2}</li>
          </ul>
          <Link to='/'>Home page</Link>
          </> 
        )
    }
}

export default Movies

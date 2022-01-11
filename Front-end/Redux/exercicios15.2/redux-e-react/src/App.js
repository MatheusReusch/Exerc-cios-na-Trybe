import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
    }
  }
  
  render() {
    return (
      <>
      <Home />
      <About />
      </>
    );
  }
}

export default App;

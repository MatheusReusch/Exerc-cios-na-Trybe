import React from 'react'

class Timer extends React.Component {
    constructor() {
        super()

        this.updateTimer = this.updateTimer.bind(this)

        this.state = {
            seconds: 0,
            frase: 0,
        }
    }
    async updateTimer() {
        this.idInterval = setInterval(
            () => {
                if (this.state.seconds <= 5) {
                  this.setState((prevState, _props) => ({seconds: prevState.seconds + 1}))
                }
                if (this.state.seconds > 5) {
                    this.setState((prevState, _props) => ({seconds: 0, frase: prevState.frase + 1}))
                }
                if (this.state.frase > 2) {
                    this.setState((prevState, _props) => ({seconds: 0, frase: 0}))
                }
            },
            1000
        )
    }

    componentDidMount() {
      this.updateTimer()
    }

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }
    
    render () {
        const array = ['🫁 Inspire...', '🤭 Segure...', '🌬️ Expire...']
        return (
          <>
          <p>{array[this.state.frase]}</p>  
          <p>{this.state.seconds}</p>
          </>
        )
    }
}

export default Timer

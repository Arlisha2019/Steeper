import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clicks : 0
    }
    console.log("Let the games begin....");
  }

  increaseClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })

  }

  decreaseClick = () => {
    this.setState({
      clicks: this.state.clicks - 1
    })

  }

  render() {
    return(
      <div>
      <Header />
    <div className="steeper">
      <button className="decrease" onClick={this.decreaseClick}> - </button>
      <h3 className="counter">{this.state.clicks} </h3>
      <button className="increase" onClick={this.increaseClick}> + </button>
    </div>
    </div>
    );
  }
}

export default App;

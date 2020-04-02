import React, { Component } from 'react';
import './style.css';
import Reward from './Reward.js';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerScore: 0,
      playerScore: 0
    };
  }
  
  render() {
    return (
      <div>
        <h3>Player: {this.state.playerScore} - Computer: {this.state.computerScore}</h3>
        <Reward />
      </div>
    );
  }
}

export default Score;
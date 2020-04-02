import React, { Component } from 'react';
import './style.css';
import Reward from './Reward.js';

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.playerScore >= 3 || this.props.computerScore >=3 ?
      <div>
        <h3>Player: {this.props.playerScore} - Computer: {this.props.computerScore}</h3>
        <h4>{this.props.roundOutcome}</h4>
        <Reward playerScore={this.props.playerScore}/>
      </div>:
      <div>
        <h3>Player: {this.props.playerScore} - Computer: {this.props.computerScore}</h3>
        <h4>{this.props.roundOutcome}</h4>
      </div>
    );
  }
}

export default Score;
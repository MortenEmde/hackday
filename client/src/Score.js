import React, { Component } from 'react';
import './style.css';
import Reward from './Reward.js';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerScore: 0,
      playerScore: 0,
      roundOutcome: ''
    };
  }

  scoreUpdate(props) {
    const playerRoll = this.props.computerRoll
    const computerRoll = this.props.computerRoll
    switch (`${playerRoll}${computerRoll}`) {
      case 'PaperRock':
        this.setState(state => ({
          roundOutcome: 'You Win! Paper beats Rock.',
          playerScore: +1
        }));
        break;
      case 'RockScissors':
        this.setState(state => ({
        roundOutcome: 'You Win! Rock beats Scissors.',
        playerScore: + 1
        }));
        break;
      case 'ScissorsPaper':
        this.setState(state => ({
        roundOutcome: 'You Win! Scissors beats Paper.',
        playerScore: + 1
        }));
        break;
      case 'RockPaper':
        this.setState(state => ({
        roundOutcome: 'You Lose! Paper beats Rock.',
        computerScore: + 1
        }));
        break;
      case 'ScissorsRock':
        this.setState(state => ({
        roundOutcome: 'You Lose! Rock beats Scissors.',
        computerScore: + 1
        }));
        break;
      case 'PaperScissors':
        this.setState(state => ({
        roundOutcome: 'You Lose! Scissors beats Paper.',
        computerScore: + 1
        }));
        break;
      case 'RockRock':
      case 'PaperPaper':
      case 'ScissorsScissors':
        this.setState(state => ({
          roundOutcome: 'Its a Draw! Lets keep playing.'
        }))
        break;
      default:
        this.setState(state => ({
          roundOutcome: 'Dont be indecisive! Pick a weapon and lets play!'
        }))
    }
  } 
  
  render() {
    return (
      <div>
        <h3>PRoll:{this.props.playerRoll} CRoll:{this.props.computerRoll}</h3>
        <h4>{this.roundOutcome}</h4>
        <h3>Player: {this.state.playerScore} - Computer: {this.state.computerScore}</h3>
        <Reward />
      </div>
    );
  }
}

export default Score;
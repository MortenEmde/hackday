import React, { Component } from 'react';
import './style.css';
import Reward from './Reward.js';

class Score extends Component {
  constructor(props) {
    super(props);
  }

  // scoreUpdate(props) {
  //   const playerRoll = this.props.playerRoll
  //   const computerRoll = this.props.computerRoll
  //   switch (`${playerRoll}${computerRoll}`) {
  //     case 'PaperRock':
  //       this.setState({
  //         roundOutcome: 'You Win! Paper beats Rock.',
  //         playerScore: +1
  //       });
  //       break;
  //     case 'RockScissors':
  //       this.setState({
  //       roundOutcome: 'You Win! Rock beats Scissors.',
  //       playerScore: + 1
  //       });
  //       break;
  //     case 'ScissorsPaper':
  //       this.setState({
  //       roundOutcome: 'You Win! Scissors beats Paper.',
  //       playerScore: + 1
  //       });
  //       break;
  //     case 'RockPaper':
  //       this.setState({
  //       roundOutcome: 'You Lose! Paper beats Rock.',
  //       computerScore: + 1
  //       });
  //       break;
  //     case 'ScissorsRock':
  //       this.setState({
  //       roundOutcome: 'You Lose! Rock beats Scissors.',
  //       computerScore: + 1
  //       });
  //       break;
  //     case 'PaperScissors':
  //       this.setState({
  //       roundOutcome: 'You Lose! Scissors beats Paper.',
  //       computerScore: + 1
  //       });
  //       break;
  //     case 'RockRock':
  //     case 'PaperPaper':
  //     case 'ScissorsScissors':
  //       this.setState({
  //         roundOutcome: 'Its a Draw! Lets keep playing.'
  //       });
  //       break;
  //     default:
  //       this.setState({
  //         roundOutcome: 'Dont be indecisive! Pick a weapon and lets play!'
  //       });
  //   }
  // } 
  
  render() {
    return (
      this.props.playerScore >= 3 ?
      <div>
        <h4>{this.props.roundOutcome}</h4>
        <h3>Player: {this.props.playerScore} - Computer: {this.props.computerScore}</h3>
        <Reward />
      </div>:
      <div>
        <h4>{this.props.roundOutcome}</h4>
        <h3>Player: {this.props.playerScore} - Computer: {this.props.computerScore}</h3>
      </div>
    );
  }
}

export default Score;
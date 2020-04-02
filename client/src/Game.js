import React, { Component } from 'react';
import './style.css';
import Score from './Score.js';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerRoll: 'Scissors',
      computerScore: 0,
      playerScore: 0,
    };
    this.play = this.play.bind(this);
  }

  play(){
    this.setState(() => ({
      computerRoll: this.props.choises[Math.floor(Math.random() * this.props.choises.length)],
    }));
    this.score()
  }

  score () {
    const playerRoll = this.props.playerRoll
    const computerRoll = this.state.computerRoll
    console.log(playerRoll)
    console.log(computerRoll)
    
    switch (`${playerRoll}${computerRoll}`) {
      case 'PaperRock':
        this.state.playerScore += 1;
        this.state.roundOutcome = 'You\'r Paper beats the computer\'s Rock!';
        break;
      case 'RockScissors':
        this.state.playerScore += 1;
        this.state.roundOutcome = 'You\'r Rock beats the computer\'s Scissors!';
        break;
      case 'ScissorsPaper':
        this.state.playerScore += 1;
        this.state.roundOutcome = 'You\'r Scissors beats the computer\'s Paper!';
        break;
      case 'RockPaper':
        this.state.computerScore += 1;
        this.state.roundOutcome = 'You Lose! Paper beats Rock.';
        break;
      case 'ScissorsRock':
        this.state.computerScore += 1;
        this.state.roundOutcome = 'You Lose! Rock beats Scissors.';
        break;
      case 'PaperScissors':
        this.state.computerScore += 1;
        this.state.roundOutcome = 'You Lose! Scissors beats Paper.';
        break;
      case 'RockRock':
      case 'PaperPaper':
      case 'ScissorsScissors':
        this.state.roundOutcome = 'Its a Draw! Lets keep playing.';
        break;
      default:
    }
  }

  render () {
    return (
      <div>
        <button className='Play' onClick={this.play}>Play!</button>
        <Score computerScore={this.state.computerScore} playerScore={this.state.playerScore} computerRoll={this.state.computerRoll} playerRoll={this.props.playerRoll} roundOutcome={this.state.roundOutcome}/>
      </div>
    );
  }
}

export default Game;
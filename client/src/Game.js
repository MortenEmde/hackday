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
    this.setState({
      computerRoll: this.props.choises[Math.floor(Math.random() * this.props.choises.length)],
    });
    this.score()
  }

  score () {
    const playerRoll = this.props.playerRoll
    const computerRoll = this.state.computerRoll
    switch (`${playerRoll}${computerRoll}`) {
      case 'PaperRock':
        this.setState({
          playerScore: this.state.playerScore + 1,
          roundOutcome: 'Your Paper beats the computer\'s Rock!'
        });
        break;
      case 'RockScissors':
        this.setState({
          playerScore: this.state.playerScore + 1,
          roundOutcome: 'Your Rock beats the computer\'s Scissors!'
        });
        break;
      case 'ScissorsPaper':
        this.setState({
          playerScore: this.state.playerScore + 1,
          roundOutcome: 'Your Scissors beats the computer\'s Paper!'
        });
        break;
      case 'RockPaper':
        this.setState({
          computerScore: this.state.computerScore + 1,
          roundOutcome: 'Your Rock lost to the computer\'s Paper!'
        });
        break;
      case 'ScissorsRock':
        this.setState({
          computerScore: this.state.computerScore + 1,
          roundOutcome: 'Your Scissors lost to the computer\'s Rock!'
        });
        break;
      case 'PaperScissors':
        this.setState({
          computerScore: this.state.computerScore + 1,
          roundOutcome: 'Your Paper lost to the computer\'s Scissors!'
        });
        break;
      case 'RockRock':
      case 'PaperPaper':
      case 'ScissorsScissors':
        this.setState({
          roundOutcome: 'Its a Draw! Lets keep playing.'
        });
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
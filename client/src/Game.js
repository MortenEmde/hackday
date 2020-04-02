import React, { Component } from 'react';
import './style.css';
import Score from './Score.js';

class Game extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play(){
    this.setState(() => ({}));
    this.computerRoll = this.props.choises[Math.floor(Math.random() * this.props.choises.length)]
    const playerRollObj = this.props.playerRoll
    if (playerRollObj.isRockOn) {
      return this.lockedPlayerRoll = 'Rock'
    } else if (playerRollObj.isPaperOn) {
      return this.lockedPlayerRoll = 'Paper'
    } else if (playerRollObj.isScissorOn) {
      return this.lockedPlayerRoll = 'Scissors'
    } 
    return this.lockedPlayerRoll = 'indecisiveness'
  }

  render () {
    return (
      <div>
        <button className='Play' onClick={this.play}>Play!</button>
        <Score computerRoll={this.computerRoll} playerRoll={this.lockedPlayerRoll}/>
      </div>
    );
  }
}

export default Game;
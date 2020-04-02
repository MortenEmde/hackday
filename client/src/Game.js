import React, { Component } from 'react';
import './style.css';
import Score from './Score.js';

class Game extends Component {
  constructor(props) {
    super(props);
    this.computerRoll = ''
    this.play = this.play.bind(this);
  }

  play(){
    this.computerRoll = this.props.choises[Math.floor(Math.random() * this.props.choises.length)]
  }

  render () {
    return (
      <div>
        <button className='Play' onClick={this.play}>Play!</button>
        <Score computerRoll={this.computerRoll} playerRoll={[this.props.playerRoll]}/>
      </div>
    );
  }
}

export default Game;
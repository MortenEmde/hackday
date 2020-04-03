import React, { Component } from 'react';
import './style.css';
import Game from './Game.js';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lockedPlayerRoll: ''
    }
    this.choises = [
      'Rock',
      'Paper',
      'Scissors'
    ]
    this.rollRock = this.rollRock.bind(this);
    this.rollPaper = this.rollPaper.bind(this);
    this.rollScissors = this.rollScissors.bind(this);
  }

  rollRock() {
    this.setState({
      lockedPlayerRoll: this.choises[0]
    });
  }

  rollPaper() {
    this.setState({
      lockedPlayerRoll: this.choises[1]
    });
  }

  rollScissors() {
    this.setState({
      lockedPlayerRoll: this.choises[2]
    });
  }

  render () {
    let classNameRock = 'Rock';
    if (this.state.lockedPlayerRoll === 'Rock') {
      classNameRock = 'Rock-active';
    }
    let classNamePaper = 'Paper';
    if (this.state.lockedPlayerRoll === 'Paper') {
      classNamePaper= 'Paper-active';
    }
    let classNameScissors = 'Scissors';
    if (this.state.lockedPlayerRoll === 'Scissors') {
      classNameScissors = 'Scissors-active';
    }
    return (
      <div className="player">
        <button className={classNameRock} onClick={this.rollRock}>{this.choises[0]}</button>
        <button className={classNamePaper} onClick={this.rollPaper}>{this.choises[1]}</button>
        <button className={classNameScissors} onClick={this.rollScissors}>{this.choises[2]}</button>
        <Game choises={this.choises} baseState={this.baseState} playerRoll={this.state.lockedPlayerRoll}/>
      </div>
    );
  }
}

export default Player;

import React, { Component } from 'react';
import './style.css';
import Game from './Game.js';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRockOn: true,
      isPaperOn: false,
      isScissorsOn: false,};
    this.rollRock = this.rollRock.bind(this);
    this.rollPaper = this.rollPaper.bind(this);
    this.rollScissors = this.rollScissors.bind(this);
  }

  rollRock() {
    this.setState(state => ({
      isRockOn: !state.isRockOn,
      isPaperOn: state.isPaperOn = false,
      isScissorsOn: state.isScissorOn = false,
    }));
    this.translateRoll();
  }

  rollPaper() {
    this.setState(state => ({
      isRockOn: state.isRockOn = false,
      isPaperOn: !state.isPaperOn,
      isScissorsOn: state.isScissorOn = false,
    }));
    this.translateRoll();
  }

  rollScissors() {
    this.setState(state => ({
      isRockOn: state.isRockOn = false,
      isPaperOn: state.isPaperOn = false,
      isScissorsOn: !state.isScissorOn
    }));
    this.translateRoll()
  }

  translateRoll() {
    const playerRollObj = this.state;
    if (playerRollObj.isRockOn) {
      return this.lockedPlayerRoll = 'Rock'
    } else if (playerRollObj.isPaperOn) {
      return this.lockedPlayerRoll = 'Paper'
    } else if (playerRollObj.isScissorsOn) {
      return this.lockedPlayerRoll = 'Scissors'
    }
  }

  render () {
    return (
      <div>
        <button className={this.props.choises[0]} onClick={this.rollRock}>{this.props.choises[0]}</button>
        <button className={this.props.choises[1]} onClick={this.rollPaper}>{this.props.choises[1]}</button>
        <button className={this.props.choises[2]} onClick={this.rollScissors}>{this.props.choises[2]}</button>
        <Game choises={this.props.choises} playerRoll={this.lockedPlayerRoll}/>
      </div>
    );
  }
}

export default Player;

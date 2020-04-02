import React, { Component } from 'react';
import './style.css';
import Game from './Game.js';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRockOn: false,
      isPaperOn: false,
      isScissorsOn: false,};
    this.rollRock = this.rollRock.bind(this);
    this.rollPaper = this.rollPaper.bind(this);
    this.rollScissors = this.rollScissors.bind(this);
  }

  rollRock() {
    this.setState({
      isRockOn: true,
      isPaperOn: false,
      isScissorsOn: false,
    });
  }

  rollPaper() {
    this.setState({
      isRockOn: false,
      isPaperOn: true,
      isScissorsOn: false,
    });
  }

  rollScissors() {
    this.setState({
      isRockOn: false,
      isPaperOn: false,
      isScissorsOn: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      const playerRollObj = this.state;
      this.translateRoll(playerRollObj);
    }
  }

  translateRoll(playerRollObj) {
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
      <div className="player">
        <button className={this.props.choises[0]} onClick={this.rollRock}>{this.props.choises[0]}</button>
        <button className={this.props.choises[1]} onClick={this.rollPaper}>{this.props.choises[1]}</button>
        <button className={this.props.choises[2]} onClick={this.rollScissors}>{this.props.choises[2]}</button>
        <Game choises={this.props.choises} playerRoll={this.lockedPlayerRoll}/>
      </div>
    );
  }
}

export default Player;

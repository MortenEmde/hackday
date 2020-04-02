import React, { Component } from 'react';
import './style.css';
import Game from './Game.js';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRockOn: false,
      isPaperOn: false,
      isScissorOn: false,
    };
    this.rollRock = this.rollRock.bind(this);
    this.rollPaper = this.rollPaper.bind(this);
    this.rollScissor = this.rollScissor.bind(this);
  }

  rollRock() {
    this.setState(state => ({
      isRockOn: !state.isRockOn,
      isPaperOn: state.isPaperOn = false,
      isScissorOn: state.isScissorOn = false,
    }));
  }

  rollPaper() {
    this.setState(state => ({
      isRockOn: state.isRockOn = false,
      isPaperOn: !state.isPaperOn,
      isScissorOn: state.isScissorOn = false,
    }));
  }

  rollScissor() {
    this.setState(state => ({
      isRockOn: state.isRockOn = false,
      isPaperOn: state.isPaperOn = false,
      isScissorOn: !state.isScissorOn
    }));
  }

  render () {
    return (
      <div>
        <button className={this.props.choises[0]} onClick={this.rollRock}>{this.props.choises[0]}</button>
        <button className={this.props.choises[1]} onClick={this.rollPaper}>{this.props.choises[1]}</button>
        <button className={this.props.choises[2]} onClick={this.rollScissor}>{this.props.choises[2]}</button>
        <Game choises={this.props.choises} playerRoll={this.state}/>
      </div>
    );
  }
}

export default Player;

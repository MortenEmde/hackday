import React, { Component } from 'react';
import './style.css';
import Player from './Player.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.choises = [
      "Rock",
      "Paper",
      "Scissors"
    ]
  }

  render () {
    return (
      <Player choises={this.choises}/>
    );
  }
}

export default Board;
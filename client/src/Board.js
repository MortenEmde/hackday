import React, { Component } from 'react';
import './style.css';
import Player from './Player.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.choises = [
      "rock",
      "paper",
      "scissors"
    ]
  }

  computerPlay(){
    console.log(this.state.array[Math.floor(Math.random() * array.length)]);
  }

  render () {
    return (
      <div>
        <Player />
      </div>
    );
  }
}

export default Board;
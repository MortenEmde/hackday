import React from 'react';
import './style.css';
import Score from './Score.js';

function Game() {
  return (
    <div>
      <button className='play'>Play!</button>
      <Score />
    </div>
  );
}

export default Game;
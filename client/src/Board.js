import React from 'react';
import './style.css';
import Buttons from './Buttons.js';
import Score from './Score.js';

function Board() {
  return (
    <div>
      <Buttons />
      <Score />
    </div>
  );
}

export default Board;
import React from 'react';
import './style.css';
import Game from './Game.js';

function Player() {
  return (
    <div>
      <button className='rock'>Rock</button>
      <button className='paper'>Paper</button>
      <button className='sicssors'>Sicssors</button>
      <Game />
    </div>
  );
}

export default Player;
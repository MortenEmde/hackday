import React from 'react';
import './style.css';
import Player from './Player.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lets play! Rock, Paper, Scissors!</h1>
        <p>Beat me three times and you win a prize.</p>
      </header>
      <Player />
    </div>
  );
}

export default App;

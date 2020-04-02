import React from 'react';
import './style.css';
import Board from './Board.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lets play! Rock, Paper, Scissors!</h1>
      </header>
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;

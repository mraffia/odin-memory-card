import React, { useState, useEffect } from 'react';
import Card from './components/Card.js';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([
    ["bretta", false],
    ["brumm", false],
    ["cloth", false],
    ["grimm", false],
    ["hornet", false],
    ["jiji", false],
    ["knight", false],
    ["quirrel", false],
    ["seer", false],
    ["sly", false],
    ["tiso", false],
    ["zote", false],
  ]);

  return (
    <div className="container">
      <div className="header">
        <div className="header-title">Odin Memory Card Game</div>
      </div>

      <div className="content">
        <div className="scores-container">
          <div className="score">Score: {score}</div>
          <div className="best-score">Best score: {bestScore}</div>
        </div>
        <div className="cards-container">
          {cards.map((card, i) => {
            return (
              <Card key={i} character={card[0]} />
            )
          })}
        </div>
      </div>

      <div className="footer">
        By yours truly,&nbsp;<a href="https://github.com/mraffia"> <strong>mraffia</strong></a>
      </div>
    </div>
  );
}

export default App;

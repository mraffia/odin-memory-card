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

  function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;
    let shuffled = arr.slice();

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
    }

    return shuffled;
  }

  function resetStatus(arr) {
    let reset = arr.slice();

    for (let i = 0; i < reset.length; i++) {
      reset[i].splice(1, 1, false);
    }

    return reset;
  }

  function handleClick(card, i) {
    let clicked = cards.slice();

    if (clicked[i][1] === false) {
      clicked[i].splice(1, 1, true);
      setCards(clicked);
      setScore(score + 1);
    } else if (clicked[i][1] === true) {
      const reset = resetStatus(cards)
      setCards(reset);
      setScore(0);
    }
  }

  useEffect(() => {
    if (bestScore < score) {
      setBestScore(score);
    }

    const shuffled = shuffle(cards);
    setCards(shuffled);
  }, [score]);

  useEffect(() => {
    if (bestScore === 12) {
      window.confirm("Congrats, you beat the game! (Press any button to restart)");
      
      const reset = resetStatus(cards)
      setCards(reset);
      setScore(0);
      setBestScore(0);
    }
  }, [bestScore]);
  
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
              <div key={i} onClick={() => handleClick(card, i)}>
                <Card character={card[0]} />
              </div>
            )
          })}
        </div>
        <div className="info">Tip: Get points by clicking an image but don't click the same image  more than once. Score 12 points to beat the game.</div>
      </div>

      <div className="footer">
        By yours truly,&nbsp;<a href="https://github.com/mraffia"> <strong>mraffia</strong></a>
      </div>
    </div>
  );
}

export default App;

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
        <a href="https://github.com/mraffia">
          <strong>mraffia</strong>
          &nbsp;
          <svg aria-hidden="true" className="octicon octicon-mark-github" height="16" width="16" version="1.1" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg> 
        </a>
      </div>
    </div>
  );
}

export default App;

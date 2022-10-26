import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="container">
      <div className="header">
        <div className="header-title">Odin Memory Card Game</div>
      </div>

      <div className="cards-container">

      </div>

      <div className="footer">
        By yours truly,&nbsp;<a href="https://github.com/mraffia"> <strong>mraffia</strong></a>
      </div>
    </div>
  );
}

export default App;

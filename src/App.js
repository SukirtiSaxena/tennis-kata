import './App.css';
import { useState } from 'react';

function App() {
  const [playerOne, setPlayerOne] = useState('Player 1');
  const [playerTwo, setPlayerTwo] = useState('Player 2');

  const [scorePlayerOne, setScorePlayerOne] = useState(0);
  const [scorePlayerTwo, setScorePlayerTwo] = useState(0);

  const [gameScore, setGameScore] = useState('The game is about to begin!! Its love-all ');

  const incrementScoreP1 = () => { setScorePlayerOne(scorePlayerOne + 1); gameMessage(scorePlayerOne + 1, scorePlayerTwo); };
  const incrementScoreP2 = () => { setScorePlayerTwo(scorePlayerTwo + 1); gameMessage(scorePlayerOne, scorePlayerTwo + 1); };

  const gameMessage = (s1, s2) => {
    if (s1 > 3 || s2 > 3) {
      if (s1 === s2 + 1)
        setGameScore('Player One is at Advantage');
      if (s2 === s1 + 1)
        setGameScore('Player Two is at Advantage');
      if (s1 >= s2 + 2)
        setGameScore('Player One is the Winner');
      if (s2 >= s1 + 2)
        setGameScore('Player Two is the Winner');
    }
    if (s1 > 3 && s1 === s2)
      setGameScore('Deuce');
  };

  return (
    <div className="App-header">
      <h1> Tennis Kata </h1>
      <div>
        <label htmlFor="player1">Name Of Player 1</label>
        <input type="text" id="player1" size="25" onChange={e => setPlayerOne(e.target.value)} />
      </div>
      <div>
        <label htmlFor="player2">Name Of Player 2</label>
        <input type="text" id="player2" size="25" onChange={e => setPlayerTwo(e.target.value)} />
      </div>
      <div>
        <button onClick={incrementScoreP1}>Score for {playerOne === '' ? 'Player One' : playerOne} : {scorePlayerOne} </button>
        <button onClick={incrementScoreP2}>Score for {playerTwo === '' ? 'Player Two' : playerTwo} : {scorePlayerTwo} </button>
      </div>
      <div>
        <label> {gameScore} </label>
      </div>

    </div>

  );
}

export default App;

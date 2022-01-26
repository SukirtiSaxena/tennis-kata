import './App.css';
import { useState } from 'react';

function App() {
  const [playerOne, setPlayerOne] = useState('Player 1');
  const [playerTwo, setPlayerTwo] = useState('Player 2');

  const [scorePlayerOne, setScorePlayerOne] = useState(0);
  const [scorePlayerTwo, setScorePlayerTwo] = useState(0);

  const [gameMessage, setGameMessage] = useState('The game is about to begin!!');
  const [gameScore, setGameScore] = useState('love-all');

  const incrementScoreP1 = () => { setScorePlayerOne(scorePlayerOne + 1); gameBoard(scorePlayerOne + 1, scorePlayerTwo); };
  const incrementScoreP2 = () => { setScorePlayerTwo(scorePlayerTwo + 1); gameBoard(scorePlayerOne, scorePlayerTwo + 1); };

  const gameBoard = (s1, s2) => {
    if (gameMessage === 'The game is about to begin!!')
      setGameMessage('This is going to be interesting...');

    if (s1 > 3 || s2 > 3) {
      if (s1 === s2 + 1)
        setGameMessage('Player One is at Advantage');
      if (s2 === s1 + 1)
        setGameMessage('Player Two is at Advantage');
      if (s1 >= s2 + 2) {
        setGameMessage('Player One is the Winner');
        document.getElementById('button1').disabled = true;
        document.getElementById('button2').disabled = true;
      }
      if (s2 >= s1 + 2) {
        setGameMessage('Player Two is the Winner');
        document.getElementById('button1').disabled = true;
        document.getElementById('button2').disabled = true;
      }
    }
    if (s1 > 3 && s1 === s2)
      setGameMessage('Deuce');

    message(s1, s2);
  };

  const message = (s1, s2) => {
    const scoring = {
      0: 'love',
      1: '15',
      2: '30',
      3: '40'
    };

    (s1 <= 3 && s2 <= 3) ?
      ((s1 === s2) ?
        setGameScore(scoring[s1] + '- All') :
        setGameScore(scoring[s1] + '-' + scoring[s2])) :
      setGameScore('');

  };

  return (
    <div className="App-header">
      <h1> Tennis Scores </h1>
      <p> Fill up the players name and click on buttons below to update the scores. </p>
      <div>
        <label htmlFor="player1">Name Of Player 1    </label>
        <input type="text" id="player1" size="25" onChange={e => setPlayerOne(e.target.value)} />
      </div>
      <div>
        <label htmlFor="player2">Name Of Player 2    </label>
        <input type="text" id="player2" size="25" onChange={e => setPlayerTwo(e.target.value)} />
      </div>
      <div>
        <button data-testid='button1' id='button1' onClick={incrementScoreP1}>Score for {playerOne === '' ? 'Player One' : playerOne} : {scorePlayerOne} </button>
        <button data-testid='button2' id='button2' onClick={incrementScoreP2}>Score for {playerTwo === '' ? 'Player Two' : playerTwo} : {scorePlayerTwo} </button>
      </div>
      <div>
        <label> {gameMessage} </label>
      </div>
      <div>
        <label> {gameScore} </label>
      </div>
    </div>

  );
}

export default App;

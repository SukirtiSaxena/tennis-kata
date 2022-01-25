import './App.css';
import {useState} from 'react';

function App() {
const [playerOne,setPlayerOne] = useState('Player 1');
const [playerTwo,setPlayerTwo] = useState('Player 2');

  const [scorePlayerOne,setScorePlayerOne] = useState(0);
  const [scorePlayerTwo,setScorePlayerTwo] = useState(0);

  const incrementScoreP1 = () =>  setScorePlayerOne(scorePlayerOne + 1);
  const incrementScoreP2 = () =>  setScorePlayerTwo(scorePlayerTwo + 1);

  return (
    <div className="App-header">
      <h1> Tennis Kata </h1>
      <div>
        <label htmlFor="player1">Name Of Player 1</label>
        <input type="text" id="player1" size="25" onChange={e=> setPlayerOne(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="player2">Name Of Player 2</label>
        <input type="text" id="player2" size="25" onChange={e=> setPlayerTwo(e.target.value)}/>
      </div>
      <div>
        <button onClick={incrementScoreP1}>Score for {playerOne === ''? 'Player One' : playerOne} : {scorePlayerOne} </button>
        <button onClick={incrementScoreP2}>Score for {playerTwo === '' ? 'Player Two' : playerTwo} : {scorePlayerTwo} </button>
      </div>

    </div>

  );
}

export default App;

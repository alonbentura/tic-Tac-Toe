import React, { useState } from 'react';
import './App.css';
import Squre from './squre'



function App() {
  const s = Array(9).fill(null)
  const [xIsNext, setNext] = useState(true)
  const [squaeres, setSquares] = useState(s)


  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  const handleClick = (i) => {
    const squaresAfterPlay = squaeres.slice();
    console.log("squaresAfterPlay", squaresAfterPlay[i])
    if (squaresAfterPlay[i] === null && !winner) {
      squaresAfterPlay[i] = xIsNext ? "X" : "O"
      setSquares(squaresAfterPlay);
      setNext(!xIsNext)

    }

  };

  const winner = calculateWinner(squaeres);
  let status;

  return (
    <div className="App" >
      {winner ? status = "winner:" +  winner : 'Next player: ' + (xIsNext ? 'X' : 'O')}
      <div className="container">
        {squaeres.map((squre, index) => {
          return <Squre value={squre} onClick={() => handleClick(index)} />
        })}
      </div>
    </div>
  );
}

export default App;

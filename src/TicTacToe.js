import React, { useState } from "react";
import Gamebox from "./Gamebox";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const decideWinner = (board) => {
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

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);

  const [isXturn, setIsXturn] = useState(true);

  const handleClick = (index) => {
    if (winner == null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXturn(!isXturn);
    }
  };

  const { width, height } = useWindowSize();
  return (
    <div className="full-game">
      {winner ? <Confetti width={width} height={height} gravity={0.01} /> : ""}

      <div className="board">
        {board.map((val, index) => (
          <Gamebox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>Winner is : {winner}</h2> : ""}
      
      <button
        onClick={() => {
          setBoard([null, null, null, null, null, null, null, null, null]);
          setIsXturn(true);
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default TicTacToe;

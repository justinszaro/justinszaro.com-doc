import { useState } from "react";

// TODOS:
// 1. For the current move only, show “You are at move #…” instead of a button. Done!
// 2. Rewrite Board to use two loops to make the squares instead of hardcoding them. Done!
// 3. Add a toggle button that lets you sort the moves in either ascending or descending order. Done!
// 4. When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
// 5. Display the location for each move in the format (row, col) in the move history list.

export default function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const isXNext = currentMove % 2 === 0;
  const [sortAscending, setSortAscending] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  let moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      description = "You are at move #" + (move + 1);
    } else if (move > 0) {
      description = "Go to move #" + (move + 1);
    } else {
      description = "Go to game start";
    }

    if (move === currentMove) {
      return (
        <li key={move}>
          <p>{description}</p>
        </li>
      );
    } else {
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    }
  });

  if (!sortAscending) {
    moves = moves.reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => setSortAscending(!sortAscending)}>Sort</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ isXNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  let board = [];

  function renderSquare($i) {
    return (
      <Square
        key={`square_${$i}`}
        value={squares[$i]}
        onSquareClick={() => handleClick($i)}
      />
    );
  }

  for (let row = 0; row < 3; row++) {
    let column = [];
    for (let col = 0; col < 3; col++) {
      column.push(renderSquare(row * 3 + col));
    }
    board.push(
      <div key={row} className="board-row">
        {column}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {board}
    </>
  );
}

function calculateWinner(squares) {
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

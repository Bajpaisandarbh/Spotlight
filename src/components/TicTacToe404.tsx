"use client";
import { useState } from "react";

type Player = "X" | "O" | null;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares: Player[]): Player | "Draw" | null {
  for (const [a, b, c] of winningCombos) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every(Boolean)) return "Draw";
  return null;
}

export default function TicTacToe404() {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-lg font-semibold text-primary mb-2">
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Next: ${xIsNext ? "X" : "O"}`}
      </div>
      <div
        className="grid grid-cols-3 gap-2"
        style={{ width: 210, height: 210 }}
      >
        {squares.map((val, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-16 h-16 bg-background border-2 border-border text-3xl font-bold rounded shadow hover:bg-accent/10 transition-colors flex items-center justify-center"
            style={{
              color:
                val === "X" ? "#ef4444" : val === "O" ? "#3b82f6" : undefined,
              cursor: val || winner ? "not-allowed" : "pointer",
            }}
            aria-label={`Cell ${i + 1}`}
            disabled={!!val || !!winner}
          >
            {val}
          </button>
        ))}
      </div>
      {(winner || squares.every(Boolean)) && (
        <button
          onClick={reset}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition mt-2"
        >
          Play Again
        </button>
      )}
      <p className="text-sm text-foreground/70 mt-2">
        Play Tic Tac Toe while you’re lost!
      </p>
    </div>
  );
}

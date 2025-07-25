"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const XO3x3 = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const t = useTranslations("xo3x3");

  function handleClick(index: number) {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    // setXIsNext(true);
  }

  function calculateWinner(squares: string[]) {
    const lines = [
      // Hàng
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Cột
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Chéo
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <section className="min-h-screen center-flex ">
      <div className="max-w-[400px] w-[95%] center-flex flex-col p-4 gap-8">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
        <div className="relative w-full grid grid-cols-3 gap-1">
          {board.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-full aspect-square text-4xl font-black border border-gray-500 rounded flex items-center justify-center select-none ${
                !board[index]
                  ? xIsNext
                    ? "hover:bg-red-500/20 cursor-pointer"
                    : "hover:bg-blue-500/20 cursor-pointer"
                  : board[index] === "X"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            >
              {board[index]}
            </button>
          ))}
          {(winner || board.every(Boolean)) && (
            <button
              onClick={resetGame}
              className={`absolute inset-0 px-4 py-2 text-white text-3xl hover:text-4xl font-bold cursor-pointer transition-all duration-300 ${
                winner
                  ? winner === "X"
                    ? "bg-red-500/60 hover:bg-red-500/70"
                    : "bg-blue-500/60 hover:bg-blue-500/70"
                  : board.every(Boolean)
                  ? "bg-gray-500/60 hover:bg-gray-500/70"
                  : ""
              }`}
            >
              {t("resetGame")}
            </button>
          )}
        </div>
        <div className="text-3xl font-bold">
          {winner
            ? `${t("winner")}: ${winner}`
            : board.every(Boolean)
            ? t("draw")
            : `${t("currentTurn")}: ${xIsNext ? "X" : "O"}`}
        </div>
      </div>
    </section>
  );
};

export default XO3x3;

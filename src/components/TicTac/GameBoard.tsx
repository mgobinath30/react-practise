import React from "react";

const initialBoardState = Array.from({ length: 3 }, () => Array(3).fill("*"));

export default function GameBoard({
  gameTurn,
  onSelect,
}: {
  gameTurn: { square: { row: number; col: number }; player: "X" | "O" }[];
  onSelect: (rowIndex: number, colIndex: number) => void;
}) {
  let boardState = initialBoardState;

  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    boardState[row][col] = player;
  }

  return (
    <ol className="grid-list-container">
      {boardState.map((pItem, PIndex) => (
        <li key={PIndex}>
          <ol className="grid-item-container">
            {pItem.map((cItem, iIndex) => (
              <button
                key={iIndex}
                disabled={cItem != "*"}
                onClick={() => onSelect(PIndex, iIndex)}
              >
                {cItem}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

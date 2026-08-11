import React from "react";

const initialBoardState = Array.from({ length: 3 }, () => Array(3).fill("*"));

export default function GameBoard({
  activePlayer,
  onSelect,
}: {
  activePlayer: "X" | "O";
  onSelect: () => void;
}) {
  const [boardState, setBoardState] = React.useState(initialBoardState);

  //   const handleplay1 = (rndex: number, cndex: number) => {
  //     setBoardState((prevState) => {
  //       const updateState = structuredClone(prevState);
  //       updateState[rndex][cndex] = initialPlayer;
  //       return updateState;
  //     });
  //   };

  const handlePlay = (rndex: number, cndex: number) => {
    setBoardState((prevState) =>
      prevState.map((rowItems, rowIndex) =>
        rowItems.map((colItems, colIndex) => {
          if (rowIndex === rndex && colIndex === cndex) {
            return activePlayer;
          } else {
            return colItems;
          }
        }),
      ),
    );
    onSelect();
  };

  //   const handlePlay3 = (rndex: number, cndex: number) => {
  //     setPlayer((prev) => (prev === "X" ? "O" : "X"));
  //     setBoardState((prevState) => {
  //       const updateState = [...prevState];
  //       updateState[rndex] = [...updateState[rndex]];
  //       updateState[rndex][cndex] = initialPlayer;
  //       return updateState;
  //     });
  //   };
  return (
    <ol className="grid-list-container">
      {boardState.map((pItem, PIndex) => (
        <li key={PIndex}>
          <ol className="grid-item-container">
            {pItem.map((cItem, iIndex) => (
              <button key={iIndex} onClick={() => handlePlay(PIndex, iIndex)}>
                {cItem}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

import React from "react";
import TicPlayer from "./TicPlayer";
import GameBoard from "./GameBoard";
import GameLog from "./GameLog";
import WinDrawPanel from "./WinDrawPanel";
import { WINNING_COMBINATION } from "./WINNING_COMBINATION";
import "./TicTacMain.css";

const initialBoardState = Array.from({ length: 3 }, () => Array(3).fill(null));

function activePlayerFinder(
  gameTurn: { square: { row: number; col: number }; player: "X" | "O" }[],
): "X" | "O" {
  let playername: "X" | "O" = "X";
  if (gameTurn[0]?.player === "X" && gameTurn.length > 0) {
    playername = "O";
  }
  return playername;
}

function checkWinning(boardState: string[][]): boolean {
  let winner: boolean = false;
  for (let combination of WINNING_COMBINATION) {
    const firstSqare = boardState[combination[0].row][combination[0].col];
    const secondSqare = boardState[combination[1].row][combination[1].col];
    const thirdSqare = boardState[combination[2].row][combination[2].col];
    if (firstSqare && firstSqare === secondSqare && firstSqare === thirdSqare) {
      winner = true;
    }
  }
  return winner;
}

let boardState = [...initialBoardState.map((item) => [...item])];

function boardHanlder(
  gameTurn: { square: { row: number; col: number }; player: "X" | "O" }[],
) {
  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    boardState[row][col] = player;
  }
  return boardState;
}

export default function TicTacMain() {
  const [players, setPlayers] = React.useState<
    {
      playerName: string;
      playerSymbol: string;
    }[]
  >([
    { playerName: "Player 1", playerSymbol: "X" },
    { playerName: "Player 2", playerSymbol: "O" },
  ]);

  const [gameTurn, setGameTurn] = React.useState<
    { square: { row: number; col: number }; player: "X" | "O" }[]
  >([]);

  let activePlayer: "X" | "O" = activePlayerFinder(gameTurn);

  let draw = false;

  const boardState = boardHanlder(gameTurn);

  const handleEdit = (index: number, name: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, i) => ({
        ...player,
        playerName: i === index ? name : player.playerName,
      })),
    );
  };

  const handlePlayerSwitch = (rndex: number, cndex: number) => {
    setGameTurn((prevTurn) => {
      const playername = activePlayerFinder(prevTurn);

      return [
        { square: { row: rndex, col: cndex }, player: playername },
        ...prevTurn,
      ];
    });
  };

  const winner = checkWinning(boardState);
  draw = gameTurn.length === 9 && !winner;

  const handleRematch = () => {
    setGameTurn([]);
  };

  return (
    <>
      <h1>Tic Tac Game</h1>
      {(winner || draw) && (
        <WinDrawPanel
          winner={winner}
          playerName={
            activePlayer === "X" ? players[1].playerName : players[0].playerName
          }
          onSelect={handleRematch}
        />
      )}
      <div className="gameContainer">
        <div className="player-container">
          <ul className="player-name-list">
            {players.map((player, index) => (
              <TicPlayer
                key={index}
                onHandleSave={(newName) => handleEdit(index, newName)}
                playerName={player.playerName}
                isActive={activePlayer === player.playerSymbol}
                playerSymbol={player.playerSymbol}
              />
            ))}
          </ul>
        </div>

        <div className="game-section">
          <GameBoard onSelect={handlePlayerSwitch} boardState={boardState} />
          <GameLog gameTurn={gameTurn} />
        </div>
      </div>
    </>
  );
}

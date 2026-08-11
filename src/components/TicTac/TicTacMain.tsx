import React from "react";
import TicPlayer from "./TicPlayer";
import GameBoard from "./GameBoard";
import GameLog from "./GameLog";
import { WINNING_COMBINATION } from "./WINNING_COMBINATION";
import "./TicTacMain.css";

function activePlayerFinder(
  gameTurn: { square: { row: number; col: number }; player: "X" | "O" }[],
): "X" | "O" {
  let playername: "X" | "O" = "X";
  if (gameTurn[0]?.player === "X" && gameTurn.length > 0) {
    playername = "O";
  }
  return playername;
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

  return (
    <>
      <h1>Tic Tac Game</h1>
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
          <GameBoard onSelect={handlePlayerSwitch} gameTurn={gameTurn} />
          <GameLog gameTurn={gameTurn} />
        </div>
      </div>
    </>
  );
}

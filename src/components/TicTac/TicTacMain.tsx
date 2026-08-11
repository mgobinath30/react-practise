import React from "react";
import TicPlayer from "./TicPlayer";
import GameBoard from "./GameBoard";
import GameLog from "./GameLog";
import "./TicTacMain.css";

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

  const [activePlayer, setActivePlayer] = React.useState<"X" | "O">("X");

  const handleEdit = (index: number, name: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, i) => ({
        ...player,
        playerName: i === index ? name : player.playerName,
      })),
    );
  };

  const handlePlayerSwitch = () => {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
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
          <GameBoard
            onSelect={handlePlayerSwitch}
            activePlayer={activePlayer}
          />
          <GameLog />
        </div>
      </div>
    </>
  );
}

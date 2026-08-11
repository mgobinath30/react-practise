import React from "react";

export default function TicPlayer({
  playerName,
  playerSymbol,
  isActive,
  onHandleSave,
}: {
  playerName: string;
  playerSymbol: string;
  isActive: boolean;
  onHandleSave: (x: string) => void;
}) {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const getValuehandler = () => {
    let name = document.querySelector<HTMLInputElement>("input")?.value;
    onHandleSave(name ? name : playerName);
    setIsEditing((prev) => !prev);
  };

  let player = <span className="player-name">{playerName}</span>;
  let playerAction = (
    <button
      className="player-edit-btn"
      onClick={() => setIsEditing((prev) => !prev)}
    >
      Edit
    </button>
  );

  if (isEditing) {
    player = <input type="text" id="playername" defaultValue={playerName} />;
    playerAction = (
      <button className="player-save-btn" onClick={getValuehandler}>
        Save
      </button>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span>
        {player}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      {playerAction}
    </li>
  );
}

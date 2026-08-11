export default function GameLog({
  gameTurn,
}: {
  gameTurn: { square: { row: number; col: number }; player: "X" | "O" }[];
}) {
  return (
    <ul className="logs-list">
      {gameTurn.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {`${turn.player} have moved ${turn.square.row} row and columns as ${turn.square.col}`}
        </li>
      ))}
    </ul>
  );
}

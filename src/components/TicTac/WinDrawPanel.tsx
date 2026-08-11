export default function WinDrawPanel({
  winner,
  playerName,
  onSelect,
}: {
  winner: boolean;
  playerName: string;
  onSelect: () => void;
}) {
  return (
    <>
      {winner && <h1>{playerName} is Win the Game</h1>}
      {!winner && <h1>Match Draw</h1>}
      <button onClick={onSelect}>Rematch</button>
    </>
  );
}

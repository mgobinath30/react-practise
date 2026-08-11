export default function GameBoard({
  onSelect,
  boardState,
}: {
  onSelect: (rowIndex: number, colIndex: number) => void;
  boardState: (string | null)[][];
}) {
  return (
    <ol className="grid-list-container">
      {boardState.map((pItem, PIndex) => (
        <li key={PIndex}>
          <ol className="grid-item-container">
            {pItem.map((cItem, iIndex) => (
              <li key={iIndex}>
                <button
                  disabled={cItem != null}
                  onClick={() => onSelect(PIndex, iIndex)}
                >
                  {cItem}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default function TabButton({
  children,
  onSelect,
  isActiveTag,
}: {
  children: React.ReactNode;
  onSelect: () => void;
  isActiveTag?: boolean;
}) {
  return (
    <li>
      <button onClick={onSelect} className={isActiveTag ? "active" : ""}>
        {children}
      </button>
    </li>
  );
}

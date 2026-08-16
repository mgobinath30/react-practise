export default function Input({
  name,
  type,
  onEnter,
}: {
  name: string;
  type: string;
  onEnter: (val: number) => void;
}) {
  const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value;
    onEnter(val);
  };
  return <input type={type} name={name} onChange={(e) => onUpdate(e)} />;
}

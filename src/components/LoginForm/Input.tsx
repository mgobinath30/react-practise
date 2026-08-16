interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input {...props} />
    </>
  );
}

export default function Section({
  title,
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section {...props}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

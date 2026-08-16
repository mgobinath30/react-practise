import "./indianFlag.css";

function range(start: number, end: number, step = 1) {
  let output: any[] = [];
  if (typeof end === undefined) {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  console.log(output);
  return output;
}

export default function IndianFlag() {
  const rowItems = range(0, 2 + 1);
  console.log(rowItems);
  const rows = rowItems.map((item) => <div className="row"></div>);
  return (
    <section>
      <div className="circle"></div>
      <div className="flagContainer">{rows}</div>
    </section>
  );
}

import { Invetment } from "./Interface";

import { findInterest, formatter } from "./Helper";

export default function InvestmentResult({
  investment,
}: {
  investment: Invetment;
}) {
  const result = Array.from({ length: investment.duration }, (_, index) => {
    const capital = investment.initial + investment.annual * (index + 1);
    const interest = findInterest(capital, investment.interest, index + 1);
    return {
      year: index + 1,
      interest: interest,
      totalIntest: "000",
      capital: capital,
    };
  });

  console.log(result);

  return (
    <table className="result-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Rate</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item, index) => (
          <tr key={index}>
            <td>{item.year}</td>
            <td>{formatter.format(item.capital + item.interest)}</td>
            <td>{item.interest}</td>
            <td>{item.totalIntest}</td>
            <td>{formatter.format(item.capital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

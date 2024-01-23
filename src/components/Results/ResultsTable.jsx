import "./ResultsTable.css";
import { calculateInvestmentResults } from "../../util/investment";
import { formatter } from "../../util/investment";

const ResultsTable = ({ datas }) => {
  console.log(datas);

  const results = [...calculateInvestmentResults(datas)];

  console.log(results);

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.interest += )}</td>
            <td>
              {formatter.format(
                (datas.initialInvestment += datas.annualInvestment)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;

import "./ResultsTable.css";
import { calculateInvestmentResults } from "../../util/investment";
import { formatter } from "../../util/investment";

const ResultsTable = ({ datas }) => {
  console.log(datas);

  const results = calculateInvestmentResults(datas).map((result) => {
    const totalInterest =
      result.valueEndOfYear -
      result.annualInvestment * result.year -
      datas.initialInvestment;

    const totalAmountInvested = result.valueEndOfYear - totalInterest;

    return {
      ...result,
      totalInterest: totalInterest,
      totalAmountInvested: totalAmountInvested,
    };
  });

  console.log(results);

  const thValues = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];
  return results.length > 0 ? (
    <table>
      <thead>
        <tr>
          {thValues.map((thValue) => (
            <th key={thValue}>{thValue}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.totalAmountInvested)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1 className="title-zero">Please enter a duration greater over 0</h1>
  );
};

export default ResultsTable;

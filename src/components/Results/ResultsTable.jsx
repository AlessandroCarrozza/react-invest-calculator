import "./ResultsTable.css";
import { calculateInvestmentResults } from "../../util/investment";

const ResultsTable = ({ datas }) => {
  const results = calculateInvestmentResults(
    datas.initialInvestment,
    datas.annualInvestment,
    datas.expectedReturn,
    datas.duration
  );
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
        <tr>
          <td>{results.year}</td>
          <td>{datas.annualInvestment}</td>
          <td>{datas.expectedReturn}</td>
          <td>{datas.duration}</td>
          <td>{datas.initialInvestment}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultsTable;

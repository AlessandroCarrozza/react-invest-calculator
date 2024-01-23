import InputsDatas from "./components/Inputs/InputsDatas";
import ResultsTable from "./components/Results/ResultsTable";
import { useState } from "react";

function App() {
  const [inputsDatas, setInputsDatas] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const addDatas = (event) => {
    setInputsDatas((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.log(inputsDatas);

  return (
    <main>
      <InputsDatas inputsDatas={inputsDatas} onAddDatas={addDatas} />
      <ResultsTable datas={inputsDatas} />
    </main>
  );
}

export default App;

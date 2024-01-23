import "./InputsDatas.css";
import { useState } from "react";

const InputsDatas = () => {
  const [inputsDatas, setInputsDatas] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (event) => {
    setInputsDatas((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.log(inputsDatas);

  return (
    <div id="inputs-datas-container">
      <div className="input-data">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input
            onChange={handleChange}
            type="number"
            name="initialInvestment"
            value={inputsDatas.initialInvestment}
          />
        </div>
      </div>

      <div className="input-data">
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input
            onChange={handleChange}
            type="number"
            name="annualInvestment"
            value={inputsDatas.annualInvestment}
          />
        </div>
      </div>

      <div className="input-data">
        <div>
          <label>EXPECTED RETURN</label>
          <input
            onChange={handleChange}
            type="number"
            name="expectedReturn"
            value={inputsDatas.expectedReturn}
          />
        </div>
      </div>

      <div className="input-data">
        <div>
          <label>DURATION</label>
          <input
            onChange={handleChange}
            type="number"
            name="duration"
            value={inputsDatas.duration}
          />
        </div>
      </div>
    </div>
  );
};

export default InputsDatas;

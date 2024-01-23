import "./InputsDatas.css";
import { useState } from "react";
import InputData from "./InputData";

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

  const inputs = [
    {
      label: "INITIAL INVESTMENT",
      name: "initialInvestment",
      value: inputsDatas.initialInvestment,
    },
    {
      label: "ANNUAL INVESTMENT",
      name: "annualInvestment",
      value: inputsDatas.annualInvestment,
    },
    {
      label: "EXPECTED INVESTMENT",
      name: "expectedReturn",
      value: inputsDatas.expectedReturn,
    },
    {
      label: "DURATION",
      name: "duration",
      value: inputsDatas.duration,
    },
  ];

  return (
    <div id="inputs-datas-container">
      {inputs.map((input) => (
        <InputData
          key={input.name}
          onChange={handleChange}
          label={input.label}
          name={input.name}
          value={input.value}
        />
      ))}
    </div>
  );
};

export default InputsDatas;

{
  /* <div className="input-data">
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input
            onChange={handleChange}
            type="number"
            name="annualInvestment"
            value={inputsDatas.annualInvestment}
          />
        </div>

      </div> /* <div className="input-data">
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
      </div> */
}

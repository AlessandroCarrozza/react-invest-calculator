import "./InputsDatas.css";
import { useState } from "react";

const InputsDatas = () => {
  const [inputsDatas, setInputsDatas] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
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
          />
        </div>
      </div>

      <div className="input-data">
        <div>
          <label>EXPECTED RETURN</label>
          <input onChange={handleChange} type="number" name="expectedReturn" />
        </div>
      </div>

      <div className="input-data">
        <div>
          <label>DURATION</label>
          <input onChange={handleChange} type="number" name="duration" />
        </div>
      </div>
    </div>
  );
};

export default InputsDatas;

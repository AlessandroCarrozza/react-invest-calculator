import "./InputsDatas.css";

const InputsDatas = () => {
  return (
    <div id="inputs-datas-container">
      <div className="input-data">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input type="number" />
        </div>
      </div>

      <div className="input-data">
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" />
        </div>
      </div>

      <div className="input-data">
        <div>
          <label>EXPECTED RETURN</label>
          <input type="number" />
        </div>
      </div>

      <div className="input-data">
        <div>
          <label>DURATION</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default InputsDatas;

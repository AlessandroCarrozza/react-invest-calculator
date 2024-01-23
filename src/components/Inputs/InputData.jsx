import "./InputData.css";

const InputData = ({ label, ...props }) => {
  return (
    <div className="input-data">
      <div>
        <label>{label}</label>
        <input type="number" {...props} />
      </div>
    </div>
  );
};

export default InputData;

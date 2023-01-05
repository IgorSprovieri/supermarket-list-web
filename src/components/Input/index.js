import "./index.css";

export const Input = ({ label, value, onChange }) => {
  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="input"
      ></input>
    </div>
  );
};

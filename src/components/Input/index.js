import './index.css'

export const Input = ({ label, value, onChange, type, min, required }) => {
  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="input"
        type={type}
        min={min}
        required={required}
      ></input>
    </div>
  )
}

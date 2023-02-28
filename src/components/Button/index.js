import './index.css'

export const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} type={type} className="button-container">
      {children}
    </button>
  )
}

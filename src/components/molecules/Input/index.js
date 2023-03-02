import { InputContent, Span, Container } from './styled'

export const Input = ({ label, value, onChange, type, min, required }) => {
  return (
    <Container>
      <Span className="input-label">{label}</Span>
      <InputContent
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="input"
        type={type}
        min={min}
        required={required}
      ></InputContent>
    </Container>
  )
}

import { ButtonContainer } from './styled'

export const Button = ({ children, onClick, type }) => {
  return (
    <ButtonContainer onClick={onClick} type={type}>
      {children}
    </ButtonContainer>
  )
}

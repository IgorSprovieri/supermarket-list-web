import styled from 'styled-components'
import { colors } from 'styles'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  border: 3px solid ${colors.primary};
  font-size: 22px;
  color: white;
  font-weight: bold;
  font-family: 'Avenir';
  border-radius: 24px;
  cursor: pointer;

  :hover {
    animation: onHover 0.5s forwards;
  }
  :not(hover) {
    animation: outHover 0.5s forwards;
  }

  @keyframes onHover {
    0% {
      background-color: ${colors.primary};
      color: #ffffff;
    }
    100% {
      background-color: #ffffff;
      color: ${colors.primary};
    }
  }

  @keyframes outHover {
    0% {
      background-color: #ffffff;
      color: ${colors.primary};
    }
    100% {
      background-color: ${colors.primary};
      color: #ffffff;
    }
  }
`

import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 670px;
  background-color: ${({ theme }) => theme.colors.backgroundForm};
  border-radius: 24px;
  animation: ${({ anim }) => anim} 0.5s forwards;

  @media (max-width: 420px) {
    width: 90%;
    height: 90%;
  }
`

export const ButtonContainer = styled.div`
  width: 452px;
  height: 42px;
  margin-top: 32px;

  @media (max-width: 420px) {
    width: 90%;
  }
`

export const InputContainer = styled.div`
  width: 452px;

  @media (max-width: 420px) {
    width: 90%;
  }
`

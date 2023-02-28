import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 670px;
  background-color: ${({ theme }) => theme.colors.backgroundForm};
  border-radius: 24px;

  @media (max-width: 420px) {
    width: 90%;
    height: 90%;
  }
`
export const ShoppingBagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'Shopping-bag'
})`
  width: 220px;
  height: 220px;

  @media (max-width: 420px) {
    width: 120px;
    height: 120px;
  }
`

export const Title = styled.h2`
  max-width: 310px;
  text-align: center;
`

export const SubTitle = styled.h3`
  width: ${({ width }) => width || 310}px;
  text-align: ${({ align }) => align || 'center'};
  margin-bottom: ${({ marginBottom }) => marginBottom || 48}px;

  @media (max-width: 420px) {
    width: 90%;
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

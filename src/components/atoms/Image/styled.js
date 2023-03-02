import styled from 'styled-components'
import { colors } from 'styles'

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
export const LogoImage = styled.img.attrs({
  src: '/images/logo.png',
  alt: 'supermarket-list-logo'
})`
  width: 72px;
  height: 72px;

  @media (max-width: 420px) {
    width: 60px;
    height: 60px;
  }
`
export const Loader = styled.span`
  width: 64px;
  height: 64px;
  border: 8px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

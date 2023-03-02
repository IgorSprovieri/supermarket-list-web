import styled from 'styled-components'

export const Form = styled.form`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  animation: ${({ anim }) => anim} 0.5s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: calc(100vh - 96px);
  background-color: #ffffff;
  position: fixed;
  right: 16px;
  bottom: 16px;
  border-radius: 32px;
  padding: 32px;

  animation: ${({ anim }) => anim} 0.5s forwards;

  @keyframes open {
    0% {
      transform: translateX(500px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes close {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(500px);
    }
  }

  @media (max-width: 420px) {
    width: calc(100vw - 96px);
    height: calc(100vh - 96px);
  }
`

export const TitleContainer = styled.div`
  margin-bottom: 32px;
  width: 100%;
  text-align: center;
`
export const CloseButton = styled.button`
  position: fixed;
  right: 32px;
  top: 32px;
  border: 0px;
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  cursor: pointer;
`

export const CloseImage = styled.img.attrs({
  src: 'images/close.svg',
  alt: 'Fechar Modal'
})`
  width: 32px;
  height: 32px;

  @media (max-width: 420px) {
    right: 16px;
    top: 16px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin: 8px 0px;
`

export const ButtonContainer = styled.div`
  margin-top: 48px;
  width: 240px;
`

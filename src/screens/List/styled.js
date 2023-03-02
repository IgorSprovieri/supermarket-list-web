import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 40vw;
  height: 80vh;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 48px;
  padding-top: 36px;
  overflow-y: hidden;
  animation: ${({ anim }) => anim} 0.5s forwards;

  @media (max-width: 840px) {
    width: 80vw;
    height: 80vh;
    padding: 32px;
  }

  @media (max-width: 420px) {
    width: 86vw;
    height: 82vh;
    padding: 16px;
    padding-top: 32px;
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 160px;
  height: 42px;

  @media (max-width: 420px) {
    width: 140px;
    height: 38px;
  }
`
export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  margin-top: 36px;
`
export const ListRenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
`

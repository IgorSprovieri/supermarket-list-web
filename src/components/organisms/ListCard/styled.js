import styled from 'styled-components'
import { colors } from 'styles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 97%;
  height: 58px;
  background-color: ${colors.listCard};
  border-radius: 20px;
  margin-bottom: 12px;
  padding: 9px 12px;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const CheckButton = styled.button`
  border: 0px;
  background-color: #00000000;
  cursor: pointer;
`

export const CheckImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 12px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`

export const CardSubTitle = styled.span`
  margin-top: 4px;
  font-size: 14px;
`

export const CardButton = styled.button`
  cursor: pointer;
  margin-left: 4px;
  border: 0px;
  background-color: #00000000;
`

export const TrashImage = styled.img.attrs({
  src: '/images/trash.svg',
  alt: 'delete-item'
})`
  width: 20px;

  ${Container}:hover & {
    animation: list-card-on-hover 0.5s forwards;
  }

  ${Container}:not(hover) & {
    animation: list-card-out-hover 0.5s forwards;
  }
`

export const ArrowImage = styled.img.attrs({
  src: '/images/arrow.svg',
  alt: 'update-item'
})`
  width: 10px;

  ${Container}:hover & {
    animation: list-card-on-hover 0.5s forwards;
  }

  ${Container}:not(hover) & {
    animation: list-card-out-hover 0.5s forwards;
  }
`

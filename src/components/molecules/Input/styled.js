import styled from 'styled-components'
import { colors } from 'styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 64px;
  border-radius: 8px;
  border: 2px solid ${colors.primary};
`

export const Span = styled.span`
  font-size: 16px;
  margin-top: 8px;
  margin-left: 8px;
`

export const InputContent = styled.input`
  border: 0px;
  margin-top: 4px;
  margin-left: 8px;
  margin-bottom: 8px;
  font-family: 'Avenir Next';
  font-size: 18px;
  width: calc(100% - 24px);

  :focus {
    outline: none;
  }
`

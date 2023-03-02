import styled from 'styled-components'

export const BigTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 22px;
  color: black;
  width: ${({ width }) => width}px;
  text-align: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb}px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 22px;
  color: black;
  width: ${({ width }) => width}px;
  text-align: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb}px;
`

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin: 0px;
  padding: 0px;
  width: ${({ width }) => width}px;
  text-align: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb}px;

  @media (max-width: 420px) {
    width: 90%;
  }
`

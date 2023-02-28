import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ScreenContainer,
  ContentContainer,
  ShoppingBagImage,
  Title,
  SubTitle,
  InputContainer,
  ButtonContainer
} from 'screens/Home/styled'

export const HomeScreen = () => {
  const Navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [pageAnimation, setPageAnimation] = useState('enter-page-animation')

  const onClickContinue = () => {
    if (!username) {
      alert('Username é necessário')
      return
    }

    localStorage.setItem(SAVE_USERNAME_PATH, username)

    setPageAnimation('out-page-animation')
    setTimeout(() => {
      Navigate('/list')
    }, 500)
  }

  return (
    <ScreenContainer>
      <ContentContainer id={pageAnimation}>
        <ShoppingBagImage></ShoppingBagImage>
        <Title>Sua lista de supermercado mais fácil do que nunca</Title>
        <SubTitle>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </SubTitle>
        <SubTitle width="452" align="left" marginBottom="16">
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </SubTitle>

        <InputContainer>
          <Input
            onChange={(text) => setUsername(text)}
            value={username}
            label="username"
          ></Input>
        </InputContainer>

        <ButtonContainer>
          <Button onClick={onClickContinue}>Continuar</Button>
        </ButtonContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}

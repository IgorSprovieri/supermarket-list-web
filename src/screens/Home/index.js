import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  Title,
  SubTitle,
  ShoppingBagImage,
  ScreenContainer
} from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ContentContainer,
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
      <ContentContainer anim={pageAnimation}>
        <ShoppingBagImage></ShoppingBagImage>
        <Title width="310" align="center">
          Sua lista de supermercado mais fácil do que nunca
        </Title>
        <SubTitle width="310" align="center" mb="48">
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </SubTitle>
        <SubTitle width="452" align="left" mb="16">
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

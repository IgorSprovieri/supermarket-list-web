import './styled'
import { useEffect, useState } from 'react'
import { createItem, updateItem } from 'services/request'
import { Loader, Button, Input } from 'components'
import {
  Form,
  Container,
  TitleContainer,
  CloseButton,
  CloseImage,
  InputContainer,
  ButtonContainer
} from './styled'
import { BigTitle } from 'components'

export const Modal = ({ enabled, onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item.name)
      setQuantity(item.quantity)
    }
  }, [item])

  const onClickAddItem = async () => {
    if (name.length === 0) {
      return
    }

    setLoading(true)

    const result = await createItem({ name, quantity: Number(quantity) })

    if (!result.error) {
      setLoading(false)
      setName('')
      setQuantity(1)
      onClose()
    }
  }

  const onClickUpdateItem = async () => {
    if (name.length === 0) {
      return
    }

    setLoading(true)

    const result = await updateItem(item._id, {
      name,
      quantity: Number(quantity)
    })

    if (!result.error) {
      setLoading(false)
      setName('')
      setQuantity(1)
      onClose()
    }
  }

  return (
    <Form
      anim={enabled === true ? 'fadeIn' : 'fadeOut'}
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      {loading ? (
        <Container anim={enabled === true ? 'open' : 'close'}>
          <Loader></Loader>
        </Container>
      ) : (
        <Container anim={enabled === true ? 'open' : 'close'}>
          <CloseButton onClick={onClose}>
            <CloseImage></CloseImage>
          </CloseButton>
          <TitleContainer>
            <BigTitle>{item ? 'Editar' : 'Adicionar'} Item</BigTitle>
          </TitleContainer>
          <InputContainer>
            <Input
              onChange={(text) => setName(text)}
              value={name}
              label="Nome"
              type="text"
              required={true}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              onChange={(value) => setQuantity(value)}
              value={quantity}
              label="Quantidade"
              type="number"
              min={1}
              required={true}
            ></Input>
          </InputContainer>
          <ButtonContainer>
            <Button
              onClick={() => {
                if (!item) {
                  onClickAddItem()
                } else {
                  onClickUpdateItem()
                }
              }}
              type="submit"
            >
              {item ? 'Editar' : 'Adicionar'}
            </Button>
          </ButtonContainer>
        </Container>
      )}
    </Form>
  )
}

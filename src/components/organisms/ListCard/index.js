import './styled'
import { updateItem } from 'services/request'
import { useState } from 'react'
import {
  CardTitle,
  CardSubTitle,
  CheckImage,
  CheckButton,
  Container,
  LeftContainer,
  TextContainer,
  CardButton,
  ArrowImage,
  TrashImage
} from './styled'

export const ListCard = (props) => {
  const { onClickDelete, onClickUpdate } = props
  const [item, setItem] = useState(props.item)

  async function onClickCheckBox() {
    const updatedItem = {
      _id: item._id,
      name: item.name,
      quantity: item.quantity,
      checked: !item.checked
    }

    const result = await updateItem(item._id, updatedItem)

    if (result?.error) {
      return
    }

    setItem(updatedItem)
  }

  return (
    <Container>
      <LeftContainer>
        <CheckButton onClick={onClickCheckBox}>
          <CheckImage
            src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
            alt="checked-item"
          ></CheckImage>
        </CheckButton>
        <TextContainer>
          <CardTitle>{item.name}</CardTitle>
          <CardSubTitle>{item.quantity} Unidades</CardSubTitle>
        </TextContainer>
      </LeftContainer>
      <div>
        <CardButton onClick={onClickDelete}>
          <TrashImage></TrashImage>
        </CardButton>
        <CardButton onClick={onClickUpdate}>
          <ArrowImage></ArrowImage>
        </CardButton>
      </div>
    </Container>
  )
}

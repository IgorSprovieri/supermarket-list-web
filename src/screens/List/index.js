import { useEffect, useState } from 'react'
import { getList, deleteItem } from 'services/request'
import {
  Button,
  Loader,
  ListCard,
  Modal,
  LogoImage,
  ScreenContainer
} from 'components'
import {
  ContentContainer,
  Header,
  ButtonContainer,
  ListContainer,
  ListRenderContainer
} from 'screens/List/styled'

export const ListScreen = () => {
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState(true)
  const [modalEnabled, setModalEnabled] = useState(false)
  const [renderModal, setRenderModal] = useState(false)
  const [itemToUpdate, setItemToUpdate] = useState()

  const loadList = async () => {
    setLoading(true)
    const result = await getList()
    setListData(result)
    setLoading(false)
  }

  useEffect(() => {
    loadList()
  }, [])

  useEffect(() => {
    if (modalEnabled === true) {
      setRenderModal(true)
    } else {
      setTimeout(() => {
        setRenderModal(false)
      }, 500)
    }
  }, [modalEnabled])

  const onClickDelete = async (id) => {
    const result = await deleteItem(id)

    if (result?.error) {
      return
    }

    loadList()
  }

  const onClickUpdate = (item) => {
    setItemToUpdate(item)
    setModalEnabled(true)
  }

  const onClickAdd = () => {
    setItemToUpdate()
    setModalEnabled(true)
  }

  const onClickCloseModal = () => {
    setModalEnabled(false)
    loadList()
  }

  const listRender = () => {
    if (listData?.length === 0) {
      return <h3>Sua lista está vazia</h3>
    }
    return (
      <ListRenderContainer>
        {listData.map((item) => (
          <ListCard
            key={item._id}
            item={item}
            onClickUpdate={() => onClickUpdate(item)}
            onClickDelete={() => onClickDelete(item._id)}
          />
        ))}
      </ListRenderContainer>
    )
  }

  return (
    <ScreenContainer>
      <ContentContainer anim="enter-page-animation">
        <Header>
          <LogoImage></LogoImage>
          <ButtonContainer>
            <Button onClick={() => onClickAdd()}>Adicionar</Button>
          </ButtonContainer>
        </Header>
        <ListContainer>
          {loading ? <Loader></Loader> : listRender()}
        </ListContainer>
      </ContentContainer>
      {renderModal && (
        <Modal
          enabled={modalEnabled}
          onClose={() => {
            onClickCloseModal()
          }}
          item={itemToUpdate}
        ></Modal>
      )}
    </ScreenContainer>
  )
}

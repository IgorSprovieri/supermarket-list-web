import './index.css'
import { Button, Input } from '../index'
import { useEffect, useState } from 'react'
import { createItem, updateItem } from 'services/request'
import { Loader } from 'components'

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
    <form
      id={
        enabled === true
          ? 'modal-fade-in-animation'
          : 'modal-fade-out-animation'
      }
      className="modal-container"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      {loading ? (
        <div
          id={
            enabled === true ? 'modal-open-animation' : 'modal-close-animation'
          }
          className="modal-content-container"
        >
          <Loader></Loader>
        </div>
      ) : (
        <div
          id={
            enabled === true ? 'modal-open-animation' : 'modal-close-animation'
          }
          className="modal-content-container"
        >
          <button className="modal-close-button" onClick={onClose}>
            <img
              className="modal-close-image"
              src="images/close.svg"
              alt="fechar modal"
            ></img>
          </button>
          <div className="modal-title-container">
            <h1>{item ? 'Editar' : 'Adicionar'} Item</h1>
          </div>
          <div className="modal-input-container">
            <Input
              onChange={(text) => setName(text)}
              value={name}
              label="Nome"
              type="text"
              required={true}
            ></Input>
          </div>
          <div className="modal-input-container">
            <Input
              onChange={(value) => setQuantity(value)}
              value={quantity}
              label="Quantidade"
              type="number"
              min={1}
              required={true}
            ></Input>
          </div>
          <div className="modal-button-container">
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
          </div>
        </div>
      )}
    </form>
  )
}

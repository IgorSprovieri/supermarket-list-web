import { api } from 'services/api'
import { SAVE_USERNAME_PATH } from 'services/constants'

export const getUser = async () => {
  try {
    const result = await api.get('/user', {
      query: {
        username: localStorage.getItem(SAVE_USERNAME_PATH)
      }
    })
    return result.data
  } catch (error) {
    console.log(error)
    return { error }
  }
}

export const getList = async () => {
  try {
    const result = await api.get('/items')
    return result.data
  } catch (error) {
    alert('Erro ao buscar dados da API')
    return { error }
  }
}

export const updateItem = async (id, item) => {
  try {
    const result = await api.put(`/item/${id}`, {
      ...item
    })
    return result.data
  } catch (error) {
    alert('Erro ao atualizar dados da API')
    return { error }
  }
}

export const deleteItem = async (id) => {
  try {
    const result = await api.delete(`/item/${id}`)
    return result.data
  } catch (error) {
    alert('Erro ao deletar dados da API')
    return { error }
  }
}

export const createItem = async (item) => {
  try {
    const result = await api.post('item', { ...item })
    return result.data
  } catch (error) {
    alert('Erro ao salvar dados da API')
    return { error }
  }
}

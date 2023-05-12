import axios from 'axios'
import { SAVE_USERNAME_PATH } from 'services/constants'

export const api = axios.create({
  baseURL: 'https://api.supermarket-list.ispapps.com',
  headers: {
    username: localStorage.getItem(SAVE_USERNAME_PATH) || ''
  }
})

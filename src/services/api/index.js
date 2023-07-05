import axios from 'axios'
import { SAVE_USERNAME_PATH } from 'services/constants'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    username: localStorage.getItem(SAVE_USERNAME_PATH) || ''
  }
})

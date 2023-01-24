import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: import.meta.env.VITE_API_Key,
  },
})

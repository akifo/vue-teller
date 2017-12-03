import axios from 'axios'

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

API.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default API

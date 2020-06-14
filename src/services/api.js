import axios from 'axios'

const api = axios.create({
  baseURL: 'http://one.zetai.info'
})

export default api
import axios from 'axios'
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
const api = axios.create({ baseURL: API_BASE, timeout: 10000 })
api.interceptors.request.use(cfg => { const token = localStorage.getItem('access'); if (token) cfg.headers.Authorization = `Bearer ${token}`; return cfg })
export default api

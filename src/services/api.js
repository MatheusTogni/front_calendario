import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-calendario.vercel.app', 
});

export default api;
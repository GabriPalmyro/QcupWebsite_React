import axios from 'axios';
import { SERVIDOR_LARAVEL } from './Config';

const api = axios.create({
    baseURL: SERVIDOR_LARAVEL,
})

export default api;
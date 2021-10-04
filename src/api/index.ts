import axios from 'axios';
import { BASE_URL, API_KEY } from 'src/config';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: API_KEY,
  },
});

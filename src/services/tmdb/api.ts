import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  },
});

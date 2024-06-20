import axios from 'axios';

const API_KEY = 'your_tmdb_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTopRatedMovies = async () => {
  const response = await tmdb.get('/movie/top_rated');
  return response.data.results;
};

export const getMovieDetails = async (id: string) => {
  const response = await tmdb.get(`/movie/${id}`);
  return response.data;
};

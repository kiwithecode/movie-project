import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWM2MThlNDE0ZWQ4ODM2YTUxMTJlYzk4MzQzZjJmNSIsInN1YiI6IjY2NzQ2ODdmZThlNDM0NDU3NmEzY2NlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaIwLj-ckjJlj3sZq3y-4ajq2DlGS9ou-RGQcXYa5-I';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  },
});

export const getTopRatedMovies = async (page = 1) => {
  const response = await tmdb.get(`/movie/top_rated`, {
    params: { language: 'en-US', page },
  });
  return response.data;
};

export const searchMovies = async (query: string, page = 1) => {
  const response = await tmdb.get('/search/movie', {
    params: { query, language: 'en-US', page },
  });
  return response.data;
};

export const getMovieDetails = async (id: string) => {
  const response = await tmdb.get(`/movie/${id}`);
  return response.data;
};

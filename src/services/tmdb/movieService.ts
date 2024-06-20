import { tmdb } from './api';
import { Movie, MovieDetails } from '../../types/movie';

export const getTopRatedMovies = async (page = 1): Promise<{ results: Movie[], total_pages: number }> => {
  const response = await tmdb.get('/movie/top_rated', {
    params: { language: 'en-US', page },
  });
  return response.data;
};

export const searchMovies = async (query: string, page = 1): Promise<{ results: Movie[], total_pages: number }> => {
  const response = await tmdb.get('/search/movie', {
    params: { query, language: 'en-US', page },
  });
  return response.data;
};

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const response = await tmdb.get(`/movie/${id}`);
  return response.data;
};

import { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../services/tmdb';

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const topRatedMovies = await getTopRatedMovies();
      setMovies(topRatedMovies);
    })();
  }, []);

  return movies;
};

export default useMovies;

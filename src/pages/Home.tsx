import { useState } from 'react';
import MovieCard from '../components/common/MovieCard';
import useMovies from '../hooks/useMovies';
import Pagination from '../components/common/Pagination';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const { movies, totalPages, loading } = useMovies(searchTerm, page);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Top Rated Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 mb-4 border rounded w-full bg-white dark:bg-gray-700 dark:text-white"
      />
      {loading ? (
        <div>Loading...</div>
      ) : movies.length === 0 ? (
        <div>No results found for "{searchTerm}"</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;

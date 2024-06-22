import React, { useState } from "react";
import MovieCard from "../components/common/MovieCard";
import useMovies from "../hooks/useMovies";
import Pagination from "../components/common/Pagination";
import { usePagination } from "../context/PaginationContext";
import MovieModal from "../components/common/MovieModal";
import { getMovieDetails } from "../services/tmdb/movieService";
import { MovieDetails as MovieDetailsType } from "../types/movie";

const Home: React.FC = () => {
  const { page, setPage } = usePagination();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { movies, totalPages, loading } = useMovies(searchTerm, page);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleCardClick = async (movieId: number) => {
    try {
      const movieDetails = await getMovieDetails(movieId.toString());
      setSelectedMovie(movieDetails);
      setIsModalOpen(true);
      setError(null); // Clear any previous error
    } catch (error) {
      setError("Failed to fetch movie details. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8 font-bungee">Top Rated Movies</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                onClick={() => handleCardClick(movie.id)}
              />
            ))}
          </div>
          <div className="w-full overflow-x-auto mt-4">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <MovieModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        movie={selectedMovie}
      />
    </div>
  );
};

export default Home;

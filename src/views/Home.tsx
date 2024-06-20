import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const movies = useMovies();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Top Rated Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

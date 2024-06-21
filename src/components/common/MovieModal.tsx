import React from 'react';
import Modal from 'react-modal';
import RatingStars from '../common/RatingStars';

Modal.setAppElement('#root');

interface MovieModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  movie: any;
}

const MovieModal: React.FC<MovieModalProps> = ({ isOpen, onRequestClose, movie }) => {
  if (!movie) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Movie Details"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <div className="bg-white dark:bg-dark-surface p-6 rounded-lg shadow-lg dark:shadow-custom-dark max-w-full md:max-w-3xl w-full overflow-y-auto max-h-full md:max-h-3/4">
        <h2 className="text-3xl font-bold mb-4 text-center text-light-text dark:text-dark-text">{movie.title}</h2>
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/2 lg:w-1/3 rounded-lg mb-4 md:mb-0"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="md:ml-8 bg-light-surface dark:bg-dark-surface p-4 rounded-lg flex-1">
            <p className="mt-4 md:mt-0 text-light-text dark:text-dark-text">
              <strong>Original Title:</strong> {movie.original_title}
            </p>
            <p className="text-light-text dark:text-dark-text">
              <strong>Language:</strong> {movie.original_language.toUpperCase()}
            </p>
            <p className="text-light-text dark:text-dark-text">
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className="text-light-text dark:text-dark-text">
              <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
            </p>
            <p className="text-light-text dark:text-dark-text">
              <strong>Popularity:</strong> {movie.popularity}
            </p>
            <p className="text-light-text dark:text-dark-text">
              <strong>Rating:</strong> <RatingStars rating={movie.vote_average} /> ({movie.vote_count} votes)
            </p>
            <p className="mt-4 text-light-text dark:text-dark-text">{movie.overview}</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={onRequestClose}
            className="mt-4 py-2 px-4 rounded bg-gray-500 text-white hover:bg-gray-600 dark:bg-dark-accent dark:text-white dark:hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;

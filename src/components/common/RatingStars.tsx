import React from 'react';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating / 2); // Convert the rating to a 5-star scale
  const halfStars = (rating / 2) % 1 >= 0.75 ? 1 : 0;
  const quarterStars = (rating / 2) % 1 >= 0.25 && (rating / 2) % 1 < 0.75 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars - quarterStars;

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <svg key={`full-${index}`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        ))}
      {quarterStars === 1 && halfStars === 0 && (
        <svg key={`quarter`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2V17.27z"/>
          <path fill="none" d="M0 0h24v24H0z"/>
        </svg>
      )}
      {halfStars === 1 && (
        <svg key={`half`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2v15.27z"/>
          <path fill="none" d="M0 0h24v24H0z"/>
        </svg>
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <svg key={`empty-${index}`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28L5.92 10.4l4.38-.38L12 6.1l1.71 3.92 4.38.38-3.32 2.99 1 4.28L12 15.4z"/>
          </svg>
        ))}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;

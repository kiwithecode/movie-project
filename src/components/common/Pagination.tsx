import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      pageNumbers.push(i);
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      pageNumbers.push('...');
    }
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'} rounded`}
      >
        Back
      </button>
      {pageNumbers.map((number, index) =>
        typeof number === 'string' ? (
          <span key={index} className="px-4 py-2">
            {number}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(number)}
            className={`px-4 py-2 ${number === currentPage ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'} rounded`}
          >
            {number}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'} rounded`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

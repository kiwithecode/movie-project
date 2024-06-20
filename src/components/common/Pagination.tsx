import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(currentPage + 2, totalPages);

  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  }

  if (currentPage > totalPages - 3) {
    startPage = Math.max(totalPages - 4, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-1 mt-4 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 py-1 sm:px-3 sm:py-2 ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-dark-accent text-dark-background hover:bg-dark-accent-dark'} rounded m-1`}
      >
        Back
      </button>
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-2 py-1 sm:px-3 sm:py-2 ${1 === currentPage ? 'bg-dark-accent text-dark-background' : 'bg-gray-300 text-black hover:bg-gray-400'} rounded m-1`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-2 py-1 sm:px-3 sm:py-2">...</span>}
        </>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-2 py-1 sm:px-3 sm:py-2 ${number === currentPage ? 'bg-dark-accent text-dark-background' : 'bg-gray-300 text-black hover:bg-gray-400'} rounded m-1`}
        >
          {number}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 py-1 sm:px-3 sm:py-2">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-2 py-1 sm:px-3 sm:py-2 ${totalPages === currentPage ? 'bg-dark-accent text-dark-background' : 'bg-gray-300 text-black hover:bg-gray-400'} rounded m-1`}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 sm:px-3 sm:py-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-dark-accent text-dark-background hover:bg-dark-accent-dark'} rounded m-1`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

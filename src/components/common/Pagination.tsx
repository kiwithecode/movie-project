import React from "react";
import { useTheme } from "../../context/ThemeContext";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const { theme } = useTheme();
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

  const activeClass =
    theme === "dark"
      ? "bg-dark-accent text-dark-background"
      : "bg-gray-700 text-white";
  const buttonClass = "px-2 py-1 sm:px-3 sm:py-2 rounded m-1";
  const inactiveClass =
    "bg-gray-300 text-black dark:text-white hover:bg-gray-400";
  const nextButtonClass =
    theme === "dark"
      ? "bg-dark-accent text-dark-background"
      : "bg-gray-700 text-white";

  return (
    <div className="flex items-center justify-center space-x-1 mt-4 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${buttonClass} ${
          currentPage === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : inactiveClass
        }`}
      >
        Back
      </button>
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`${buttonClass} ${
              1 === currentPage ? activeClass : inactiveClass
            }`}
          >
            1
          </button>
          {startPage > 2 && (
            <span className="px-2 py-1 sm:px-3 sm:py-2">...</span>
          )}
        </>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${buttonClass} ${
            number === currentPage ? activeClass : inactiveClass
          }`}
        >
          {number}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 py-1 sm:px-3 sm:py-2">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`${buttonClass} ${
              totalPages === currentPage ? activeClass : inactiveClass
            }`}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${buttonClass} ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : nextButtonClass
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

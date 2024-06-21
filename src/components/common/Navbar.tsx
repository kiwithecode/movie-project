import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { usePagination } from "../../context/PaginationContext";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logodark.png";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { setPage } = usePagination();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setPage(1);
    navigate("/");
  };

  return (
    <nav className="p-2 flex justify-between items-center bg-light-surface dark:bg-dark-surface">
      <div
        onClick={handleHomeClick}
        className="cursor-pointer flex items-center"
      >
        <img src={theme === "dark" ? logoDark : logoLight} alt="Logo" className="logo" />
      </div>
      <div className="flex items-center">
        <span
          className={`iconify ${
            theme === "dark"
              ? "icon-[meteocons--clear-night]"
              : "icon-[meteocons--clear-day]"
          } text-2xl cursor-pointer`}
          onClick={toggleTheme}
        ></span>
        <label htmlFor="toggle" className="relative inline-block w-10 ml-2">
          <input
            type="checkbox"
            id="toggle"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="sr-only"
          />
          <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform duration-200 ease-in-out"></div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;

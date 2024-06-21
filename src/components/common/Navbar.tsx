import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { usePagination } from '../../context/PaginationContext';
import logo from '../../assets/logo.png'; // Asegúrate de que esta ruta sea correcta

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { setPage } = usePagination();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setPage(1);
    navigate('/');
  };

  return (
    <nav className="p-2 flex justify-between items-center bg-light-surface dark:bg-dark-surface">
      <div onClick={handleHomeClick} className="cursor-pointer flex items-center">
        <img src={logo} alt="Logo" width="200px" height="auto" className="mr-2" />
      </div>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 bg-light-accent text-light-background dark:bg-dark-accent dark:text-dark-background rounded"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
};

export default Navbar;

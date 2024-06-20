import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { usePagination } from '../../context/PaginationContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { setPage } = usePagination();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setPage(1);
    navigate('/');
  };

  return (
    <header className="p-4 flex justify-between items-center bg-light-surface dark:bg-dark-surface">
      <h1 className="text-xl font-bold cursor-pointer text-light-text dark:text-dark-text" onClick={handleHomeClick}>
        Movie App
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-light-accent text-light-background dark:bg-dark-accent dark:text-dark-text rounded"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;

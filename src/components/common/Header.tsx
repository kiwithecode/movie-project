import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-900">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/')}>
        Movie App
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;

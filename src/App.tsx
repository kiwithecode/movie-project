import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import MovieDetails from './views/MovieDetails';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={theme}>
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
          <header className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-900">
            <h1 className="text-xl font-bold">Movie App</h1>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </header>
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Header from './components/common/Header';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}>
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

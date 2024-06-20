import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import MovieDetails from './views/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

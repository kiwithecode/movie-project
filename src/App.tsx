import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer"; // Importa el Footer
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div
        className={`min-h-screen ${
          theme === "dark"
            ? "bg-dark-background text-dark-text"
            : "bg-light-background text-light-text"
        }`}
      >
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
        <Footer /> {/* Añade el Footer */}
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer"; 
import { useTheme } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { theme } = useTheme(); // Obtener el tema actual del contexto

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
            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;

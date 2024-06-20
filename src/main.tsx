import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { ThemeProvider } from './context/ThemeContext';
import { PaginationProvider } from './context/PaginationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <PaginationProvider>
        <App />
      </PaginationProvider>
    </ThemeProvider>
  </React.StrictMode>
);

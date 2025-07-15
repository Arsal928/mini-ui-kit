import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

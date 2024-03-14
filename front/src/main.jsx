import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';
import './index.css';
import './media.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
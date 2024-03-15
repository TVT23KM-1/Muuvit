import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from './ThemeProvider';
import './App.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Community from './components/Community/Community';
import Login from './components/Login/Login';
import ScreenError from './components/ScreenError/ScreenError';
import Navi from './components/Navi/Navi';
import Footer from './components/Footer/Footer';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <ThemeProvider>
        <div className={`body ${theme}`}>
          <ScreenError />
          <Navi />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Footer toggleTheme={toggleTheme} theme={theme} />
        </div>

      </ThemeProvider>
    </Router>
  );
}

export default App;
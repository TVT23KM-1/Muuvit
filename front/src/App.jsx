import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeProvider';
import './App.css';
import Home from '@pages/Home';
import Search from '@pages/Search';
import Community from '@pages/Community';
import Login from '@pages/Login';
import MyAccount from '@pages/MyAccount';
import ScreenError from '@content/ScreenError';
import Navi from '@components/header/Navi';
import Footer from '@components/footer/Footer';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [ user, setUser ] = useState(null)
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      toggleTheme(savedTheme); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleLogout = () => {
    setUser(null);

  };

  return (
    <Router>
      <ThemeProvider>
        <div className={`body ${theme}`}>
          <ScreenError />
          <Navi user={user} handleLogout={handleLogout} />
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path="/myaccount" element={<MyAccount user={user} />} />
          </Routes>

          <Footer toggleTheme={toggleTheme} theme={theme} />
        </div>

      </ThemeProvider>
    </Router>
  );
}

export default App;
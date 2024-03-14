import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from './ThemeProvider';
import './App.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Community from './components/Community/Community';
import Login from './components/Login/Login';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <ThemeProvider>
        <div className={`body ${theme}`}>
          <div id="screen-error">
            <h1>Muuvi</h1>
            <h2>Liian pieni ruutu.</h2>
            <h3>Sivustoa ei voida avata.</h3>
          </div>

          <div id="container">
            <div id="colorbar">
              <div className="header-container">
                <h1>Muuvi</h1>
                <ul className="navi">
                  <li><Link to="/">Etusivu</Link></li>
                  <li><Link to="/search">Muuvihaku</Link></li>
                  <li><Link to="/community">Yhteisö</Link></li>
                  <li><Link to="/login">Kirjautuminen</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/community" element={<Community />} />
              <Route path="/login" element={<Login />} />
            </Routes>

            <div id="footer">
              <span className="gh-mark"></span> <a href="https://github.com/TVT23KMO-1/2024-q2-elokuvasovellus">Github repositio</a><br/>
              <p>© OAMK Tietotekniikan opiskelijat, 2024</p>
              <button onClick={toggleTheme}>Vaihda teemaa</button>
              <p>Tämä on {theme === 'light' ? 'vaalea' : 'tumma'} teema.</p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
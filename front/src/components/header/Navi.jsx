import React from 'react';
import { Link } from 'react-router-dom';
import './Navi.css';
const Navi = ({ user, handleLogout }) => {
  return (
      <div id="colorbar">
        <div id="navi_bar">
          <ul className="navi">
            <li><Link to="/">Etusivu</Link></li>
            <li><Link to="/search-finnkino">Näytösajat</Link></li>
            <li><Link to="/search-tmdb">Muuvihaku</Link></li>
            <li><Link to="/community">Yhteisö</Link></li>
            {!user && <li><Link to="/login">Kirjautuminen</Link></li>}
            {user && <li><Link to="/myaccount">Oma tili</Link></li>}
            {user && <li><Link onClick={handleLogout}>Kirjaudu ulos</Link></li>}
          </ul>
        </div>
      </div>
  );
};

export default Navi;
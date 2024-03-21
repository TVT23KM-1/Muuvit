import React from 'react';
import { Link } from 'react-router-dom';

const Navi = ({ user, handleLogout }) => {
  return (
    <div id="container">
      <div id="colorbar">
        <div className="header-container">
          <h1>Muuvi</h1>
          <div>
            <ul className="navi">
              <li><Link to="/">Etusivu</Link></li>
              <li><Link to="/search">Muuvihaku</Link></li>
              <li><Link to="/community">Yhteisö</Link></li>
              {!user && <li><Link to="/login">Kirjautuminen</Link></li>}
              {user && <li><Link to="/myaccount">Oma tili</Link></li>}
              {user && <li><Link onClick={handleLogout}>Kirjaudu ulos</Link></li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navi;
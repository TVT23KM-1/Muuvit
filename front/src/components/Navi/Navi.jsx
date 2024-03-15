import React from 'react'
import { Link } from 'react-router-dom';

const Navi = () => {
  return (

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

  );
};

export default Navi;
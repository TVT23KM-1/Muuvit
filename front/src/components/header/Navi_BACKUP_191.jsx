import React from 'react';
import { Link } from 'react-router-dom';
import './Navi.css';
//import { useUser } from '../../context/useUser';

const Navi = ({ /*user,*/ handleLogout }) => {
  //const { user } = useUser()
  
  return (
      <div id="colorbar">
        <div id="navi_bar">
          <ul className="navi">
            <li><Link to="/">Etusivu</Link></li>
            <li><Link to="/search-finnkino">Näytösajat</Link></li>
            <li><Link to="/search-tmdb">Muuvihaku</Link></li>
            <li><Link to="/community">Yhteisö</Link></li>
<<<<<<< HEAD
            <li><Link to="/review">Review</Link></li>
            {!user && <li><Link to="/login">Kirjautuminen</Link></li>}
            {user && <li><Link to="/myaccount">Oma tili</Link></li>}
            {user && <li><Link onClick={handleLogout}>Kirjaudu ulos</Link></li>}
=======
            {/*!user && */<li><Link to="/login">Kirjautuminen</Link></li>}
            {/*user && */<li><Link to="/myaccount">Oma tili</Link></li>}
            {/*user && */<li><Link onClick={handleLogout}>Kirjaudu ulos</Link></li>}
>>>>>>> 034cb78ee34df1385f5dc4565df818d1c19ca7be
          </ul>
        </div>
      </div>
  );
};

export default Navi;
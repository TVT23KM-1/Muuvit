import React from 'react'
import Register from '../Register/Register';

const Login = () => {
  return (

    <div className="page">

        {<Register />}

        <h2>Kirjaudu</h2>

        <p>Kirjautumisen jälkeen näkymässä esim. kirjautuminen linkin sijaan löytyisi valikot "<i>Oma tili</i>" ja "<i>Kirjaudu ulos</i>" </p>

        <p>Oma tili näkymässä oma profiili ja käyttäjätunnuksen poistaminen? <br/>
        Jälleen oman profiilin alla esim. omat arvostelut, suosikit ja omat ryhmät. <br/>
        Omissa ryhmissä pääsee ryhmiensä hallinnointiin. <br/>
        Suosikeissa voi tehdä/editoida suosikkilistaansa ja jakaa sen. <br/>
        Arvosteluissa, voiko omia arvostelujaan poistaa tai muokata? 
        </p>

    </div>

  );
};

export default Login;
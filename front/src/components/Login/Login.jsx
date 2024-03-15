import React from 'react'
import Register from '../Register/Register';

const Login = () => {
  return (

    <div className="page">

        {<Register />}

        <h2>Kirjaudu</h2>

        <p>Kirjautumisen jälkeen näkymässä esim. kirjautuminen linkin sijaan löytyisi valikot "<i>Oma tili</i>" ja "<i>Kirjaudu ulos</i>" </p>

        <p>Oma tili -näkymässä oma profiili ja käyttäjätunnuksen poistaminen <br/>
        Oma profiili -näkymässä profiilisivu ja siellä omat suosikit, arvostelut sekä ryhmät.</p>

        <p>
        Omat ryhmät: pääsee ryhmiensä hallinnointiin. <br/>
        Suosikit: voi editoida suosikkilistaansa ja jakaa sen. <br/>
        Arvostelut: kun valitsee arvostelunsa, voi muokata sitä tai poistaa sen. <br/>
        </p>

    </div>

  );
};

export default Login;
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'

export default function MyAccount ({user}) {

    if (user === null) {
        return <Navigate to="/login" />
    }

  return (

    <div className="page">

        <h2>Oma tili</h2>

            <p className="info">Olet kirjautunut käyttäjänä: {user.user}</p>

        <hr/>

        <h3>Profiili</h3>

            <p className="inner-1em">
            Siirry <a href="#">profiiliin</a> | tai <a href="#">muokkaa profiilia</a> <br/><br />
            </p>

            <p className="inner-2em"><i>Omasta profiilista löydät ja hallinnoit:</i> <br/>
            - Profiilikuvasi <br />
            - Esittelykuvaustasi <br />
            - Suosikkilistaasi <br />
            - Ryhmiäsi <br />
            </p>

            <hr/>

        <h3>Poista tili</h3>

            <p className="inner-1em">Jos poistat tilin, niin kaikki tilisi tiedot poistetaan pysyvästi. <br/>
            Huomioithan kuitenkin, että: <br/>
            Kirjoittamasi arvostelut jäävät järjestelmään anonyymeiksi arvosteluiksi. </p>

            <hr/>

    </div>

  );
};


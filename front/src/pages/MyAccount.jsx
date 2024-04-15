import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import { useLoginData } from '../context/useLoginData';
import ViewFavouritesList from '../components/content/ViewFavouritesList';

export default function MyAccount () {
  const loginData = useLoginData();
  return (

    <div className="page">

        <h2>Oma tili</h2>

            <p className="info">Olet kirjautunut käyttäjänä: {loginData.userName}</p>

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
        
        <h3>Omat suosikit</h3>
        <ViewFavouritesList />
        
    </div>

  );
};


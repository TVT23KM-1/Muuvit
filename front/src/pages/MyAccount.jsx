import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import { useLoginData } from '../context/useLoginData';
import ViewFavouritesList from '../components/content/ViewFavouritesList';
import styles from './css/MyAccount.module.css';

export default function MyAccount () {

  const onSelectDeleteAccount = (ev) => {
    console.log('delete account')
  }

  const loginData = useLoginData();
    return (
      <div>
        <div className={styles.page}>
          <h2>Oma tili</h2>
          <div className={styles.sectioni}>
            <p className="styles.sectioni">Olet kirjautunut käyttäjänä: {loginData.userName}</p>
          </div>
          <hr></hr>
        </div>

        <h2>Poista tili</h2>

            <p className={styles.sectioni}>Jos poistat tilin, niin kaikki tilisi tiedot poistetaan pysyvästi. <br/>
            Huomioithan kuitenkin, että: <br/>
            Kirjoittamasi arvostelut jäävät järjestelmään anonyymeiksi arvosteluiksi. </p>

            <div className={styles.sectioni}>
                        <button onClick={onSelectDeleteAccount}>Poista tili</button>
            </div>

            <hr/>
    
        <ViewFavouritesList />

    </div>

  );
};


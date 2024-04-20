import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useLoginData } from '../context/useLoginData';
import ViewFavouritesList from '../components/content/ViewFavouritesList';
import styles from './css/MyAccount.module.css';
import axios from "axios";



export default function MyAccount () {

  const [deleteAccountStatus, setDeleteAccountStatus] = useState({note: '',success: null, msg: ''})
  const [showRedButton, setShowRedButton] = useState(false)

  const loginData = useLoginData();

  const navigate = useNavigate()
  
  const handleLogout = () => {
    loginData.setUserName('');
    loginData.setToken('');
    navigate('/');
    //console.log(loginData);
  }

  const onSelectshowRedButton = () => {
    setShowRedButton(true)
  }
  const onSelectDeleteAccount = (ev) => {
    console.log('delete account')
    ev.preventDefault()
    axios({
        url: `${import.meta.env.VITE_BACKEND_URL}/user/private/deleteAccount`,
        method: 'delete',
        withCredentials: true,
        headers: {
                allow: 'application/json',
                "Authorization": `Bearer ${loginData.token}`
        }
    }).then(function (response) {
      setDeleteAccountStatus({note: '\'poista tili\'-viesti:',success: true, msg: 'Tilin poistaminen onnistui'})
      console.log(response.status )
      console.log('tili poistettu' )
      handleLogout()

    }).catch(function (err ) {

        if(err.message=="Network Error") {
            console.log('haloo')
            console.log(err.status)
            console.log(err)
            setDeleteAccountStatus({note: '\'poista tili\'-viesti:', success: false, msg: 'Ei yhteyttä tietokantaan'})
        } else {
            console.log(err)
            console.log(err.status)
            console.log(err.message)
            setDeleteAccountStatus({note: '\'poista tili\'-viesti:', success: false, msg: 'tunnistamaton virhe'})
        }

    })
  }
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
                        <button onClick={onSelectshowRedButton}>Poista tili</button>
                        {showRedButton && <button className={styles.redButton} onClick={onSelectDeleteAccount}>vahvista poisto</button>}
            </div>
            <div className={styles.infoText}><p>{deleteAccountStatus.msg}</p></div>

            <hr/>
    
        <ViewFavouritesList />

    </div>

  );
}


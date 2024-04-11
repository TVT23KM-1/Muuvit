import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../../index.css'
import '@pages/css/Login.css'
import { useNavigate } from "react-router-dom";

//import './Review.jsx'
//import Review from '@content/Review.jsx';



const Register = ({showLogin, setShowLogin}) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const [credentials, setCredentials] = useState({userName: '', password: ''})
  const [credentialsValidForRegistration, setCredentialsValidForRegistration] = useState(false)
  const [registrationStatus, setRegistrationStatus] = useState({success:null, msg:''})

  const userNameValid = (userName) => {
    return userName.length > 0
  }

  const passwordValid= (password) => {
    return password.length > 0
  }


  useEffect(() => {
    setCredentialsValidForRegistration(
      userNameValid(credentials.userName) && passwordValid(credentials.password)
    )
  },[credentials])

  const openRegisterForm = () => {
    setShowRegisterForm(true);
    setShowLogin(false);
    setRegistrationStatus({success:false,msg:''})
  }

  const closeRegisterForm = () => {
    setShowRegisterForm(false);
    setShowLogin(true);
  }




  const register = () => {
    console.log(credentialsValidForRegistration)
    if(!credentialsValidForRegistration) {
      setRegistrationStatus({success:false,msg:'Nimimerkki tai salasana puuttuu'})
    } else {   
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/createAccount`, credentials)
    .then(function (response) {
      console.log(response.data)
      if (response.status === 200) {
        console.log('200 - käyttäjä luotu')
        setRegistrationStatus({success:true,msg:'Tervetuloa käyttäjäksi'})
      }
    })
    .catch(function(error) {
      console.log(error.response.status)
      if (error.response && error.response.status===400) {
        console.log(error.response.status)
        console.log('400 - käyttäjä on jo olemassa')
        setRegistrationStatus({success:false, msg:'Käyttäjänimi on jo olemassa'})
      } else {
        console.log('ei yhteyyttä tietokantaan')
        setRegistrationStatus({success:false, msg:'Tietokantaan ei ole yhteyttä'})
      }


    })
  }
}

  const handleUsernameChange = (event) => {
    setCredentials({...credentials, userName: event.target.value})
  }

  const handlePasswordChange = (event) => {
    setCredentials({...credentials, password: event.target.value})
  }

  return (
    <div>
      <h2>Puuttuuko tunnus?</h2>

      {!showRegisterForm ? (
        <>
          {' '}
          <div id="buttons">         
            <button className="button" onClick={openRegisterForm}>Rekisteröidy</button> 
        </div>  
        </>
      ) : (
        <>
        <div>
          <p className="info">Täytä molemmat kentät. Nimimerkki on samalla kirjautumistunnuksesi. Se on uniikki, eikä voi olla sama toisella käyttäjällä.</p>
            <div id="login-form">
              <div id="login-text">
                <p>Nimimerkki:</p>
              </div>
                 <input className="field" onChange={handleUsernameChange} type="text" placeholder="Valitse nimimerkki" />      
              </div>
              <div id="login-form">
                <div id="login-text">
                <p>Salasana:</p>
              </div>
              
                <input className="field" onChange={handlePasswordChange} type="text" placeholder="Valitse salasana" />
              
            </div>
            <div id="buttons">         
              <button className="button" onClick={register}>Rekisteröidy</button> 
              <button onClick={closeRegisterForm}>Takaisin</button>
            </div>
            <div id="login-form">
              <p>{registrationStatus.msg}</p>
            </div>
          </div>
      </>

      )}
    </div>
  )
}

export default Register
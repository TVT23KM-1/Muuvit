import React, { useState } from 'react';
import axios from 'axios'
import '../../index.css'
import '../../pages/Login.css'



const Register = ({showLogin, setShowLogin}) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const [credentials, setCredentials] = useState({})

  const openRegisterForm = () => {
    setShowRegisterForm(true);
    setShowLogin(false);
  }

  const closeRegisterForm = () => {
    setShowRegisterForm(false);
    setShowLogin(true);
  }

  

  const register = () => {    

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/createAccount`, credentials)
    .then(function (response) {
      console.log(response.data)
      if (response.status === 200) {
        console.log('käyttäjä luotu')
        setShowRegisterForm(false);
        setShowLogin(true);
      }
    })
    .catch(function(error) {
      console.log(error)
      setShowRegisterForm(false);
      setShowLogin(true);
    })
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
        <p>
          {' '}
          <div id="buttons">         
            <button className="button" onClick={openRegisterForm}>Rekisteröidy</button> 
        </div>  
        </p>
      ) : (
        <div>
          <p className="info">Täytä molemmat kentät. Nimimerkki on samalla kirjautumistunnuksesi. Se on uniikki, eikä voi olla sama toisella käyttäjällä.</p>
            <div id="login-form">
              <div id="login-text">
                <p>Nimimerkki:</p>
              </div>
                <p>
                 <input className="field" onChange={handleUsernameChange} type="text" placeholder="Valitse nimimerkki" />
                </p>
              </div>
              <div id="login-form">
                <div id="login-text">
                <p>Salasana:</p>
              </div>
              <p>
                <input className="field" onChange={handlePasswordChange} type="text" placeholder="Valitse salasana" />
              </p>
            </div>
            <div id="buttons">         
              <button className="button" onClick={register}>Rekisteröidy</button> 
              <button onClick={closeRegisterForm}>Peruuta</button>
            </div> 
          </div>
      )}
    </div>
  );
};

export default Register;
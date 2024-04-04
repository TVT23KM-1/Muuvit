import React, { useState } from 'react';
import axios from 'axios'

const Register = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const [credentials, setCredentials] = useState({})

  const openRegisterForm = () => {
    setShowRegisterForm(true);
  }

  const closeRegisterForm = () => {
    setShowRegisterForm(false);
  }

  const register = () => {    
    alert( `${credentials.userName} ${credentials.password}` )
    axios.post('/createUser', credentials)
    .then(function (response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
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
          <a href="#" onClick={openRegisterForm}>Rekisteröidy tästä</a>
        </p>
      ) : (
        <div>
          <p class="info">Täytä molemmat kentät. Nimimerkki on samalla kirjautumistunnuksesi. Se on uniikki, eikä voi olla sama toisella käyttäjällä.</p>

          <p>Nimimerkki: <input className="field" onChange={handleUsernameChange} type="text" placeholder="Valitse nimimerkki" /></p>
          <p>Salasana: <input className="field" onChange={handlePasswordChange} type="text" placeholder="Valitse salasana" /></p>
          <button class="green" onClick={register}>Rekisteröidy</button> 
          <button onClick={closeRegisterForm}>Peruuta</button>

        </div>
      )}
    </div>
  );
};

export default Register;
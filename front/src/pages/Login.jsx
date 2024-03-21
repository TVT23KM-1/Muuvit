import React, { useState } from 'react'
import Register from '@content/Register';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const navigate = useNavigate()

 const validate = (e) => {
  e.preventDefault()
  if (username === 'admin' && password === 'nappi') {
    props.setUser({user: username, password: password})
    navigate("/myaccount")

  }

 }

  return (

    <div className="page">

        <h2>Kirjautuminen</h2>

        <p className="info">Älä koskaan jää käyttäjätunnusta ja salasanaasi ulkopuolisille.</p>


        <div id="login-form">
          <form onSubmit={validate}>
            <p>Nimimerkki: <input className="field" value={username} onChange={e => setUsername(e.target.value)}></input></p>
            <p>Salasana: <input className="field" type="password" value={password} onChange={e => setPassword(e.target.value)}></input></p>
            <button>Kirjaudu sisään</button> 
          </form>
        </div>


          <br/> <br/>


        {<Register />}


    </div>

  );
};

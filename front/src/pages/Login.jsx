import React, { useState } from 'react'
import Register from '@content/Register';
import { useNavigate } from 'react-router-dom';
import './Login.css'


export default function Login(props) {
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 //either show login form or register form
 const [showLogin, setShowLogin] = useState(true)
 const navigate = useNavigate()

 const validate = (e) => {
  e.preventDefault()
  if (username === 'admin' && password === 'nappi') {
    props.setUser({user: username, password: password})
    navigate("/myaccount")

  }

 }

  return (

    <div className="login">

      {showLogin && ( 
        <>
        <h2>Kirjautuminen</h2>

        <p className="info">Älä koskaan jää käyttäjätunnusta ja salasanaasi ulkopuolisille.</p>

          <form onSubmit={validate}>
            <div id="login-form">
              <div id="login-text">
                <p>Nimimerkki:</p>
              </div>
            <p>
              <input className="field" value={username} onChange={e => setUsername(e.target.value)}></input>
            </p>
            </div>
            <div id="login-form">
              <div id="login-text">
                <p>Salasana:</p>
              </div>
            <p> 
              <input className="field" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            </p>
            </div>
            
            <div id="buttons">   
              <button>Kirjaudu sisään</button>
            </div> 
          </form>
        </>
      )}


          <br/> <br/>


        {<Register setShowLogin={setShowLogin} />}


    </div>

  );
};

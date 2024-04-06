import React, { useState } from 'react'
import Register from '@content/Register';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'
import axios from 'axios'

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //either show login form or register form
  const [showLogin, setShowLogin] = useState(true)
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({})
  const [loginStatus, setLoginStatus] = useState({success:null, msg:''})
 const login = () => {    

  axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, credentials)
  .then(function (response) {
    console.log(response.data)
      if (response.status === 200) {
        console.log('200 - käyttäjä luotu')
        setLoginStatus({success:true,msg:'Kirjauduttu sisään'})
      }
    })
  .catch(function(error) {
    console.log(error.response.status)
      if (error.response && error.response.status===400) {
        console.log(error.response.status)
        console.log('400 - Virheellinen käyttäjätunnus tai salasana')
        setLoginStatus({success:false, msg:'Virheellinen käyttäjätunnus tai salasana'})
      } else {
        console.log('ei yhteyttä tietokantaan')
        setLoginStatus({success:false, msg:'Tietokantaan ei ole yhteyttä'})
      }
      console.log(error.status)
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

    <div className="login">

      {showLogin && ( 
        <>
        <h2>Kirjautuminen</h2>
        <p className="info">Älä koskaan jää käyttäjätunnusta ja salasanaasi ulkopuolisille.</p>     
            <div id="login-form">
              <div id="login-text">
                <p>Nimimerkki:</p>
              </div>
            <p>
              <input className="field" onChange={handleUsernameChange} type="text"></input>
            </p>
            </div>
            <div id="login-form">
              <div id="login-text">
                <p>Salasana:</p>
              </div>
            <p> 
              <input className="field" type="password" onChange={handlePasswordChange}></input>
            </p>
            </div>
            
            <div id="buttons">   
            <button className="button" onClick={login}>Kirjaudu sisään</button> 
            </div> 
            <p>{loginStatus.msg}</p>         
          </>
      )}
          <br/> <br/>
        {<Register setShowLogin={setShowLogin} />}
    </div>
  );
}
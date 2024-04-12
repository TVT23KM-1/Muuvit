import React, { useState } from 'react'
import Register from '@content/Register';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'
import axios from 'axios'
import { useLoginData } from '../context/useLoginData';


export default function Login(props) {
  const loginData = useLoginData()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showLogin, setShowLogin] = useState(true)
  //const navigate = useNavigate()
  const [credentials, setCredentials] = useState({})
  const [loginStatus, setLoginStatus] = useState({success:null, msg:''})
 const login = () => {    
  if (credentials.username === '' || credentials.password === '') {
    console.log('Käyttäjätunnus ja salasana ovat pakollisia')
    setLoginStatus({success:false, msg:'Käyttäjätunnus ja salasana ovat pakollisia'})
    return;
  }
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, credentials)
  .then(function (response) {
    console.log(response.data)
      if (response.status === 200) {
        loginData.setToken(response.data)
        loginData.setUserName(credentials.userName)
        console.log("Login", credentials.userName)
        console.log('Kirjauduttu sisään')
        setLoginStatus({success:true,msg:'Kirjauduttu sisään'})
      }
    })
  .catch(function(error) {
    console.log(error.response.status)
      if (error.response && error.response.status===400) {
        console.log(error.response.status)
        console.log('Käyttäjää ei löydy')
        setLoginStatus({success:false, msg:'Käyttäjää ei löydy'})
      } else if(error.response && error.response.status===401) {
        console.log('Virheellinen salasana')
        setLoginStatus({success:false, msg:'Virheellinen salasana'})
      }else {
        setLoginStatus({success:false, msg:'Ei yhteyttä palvelimeen'})
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
        <p className="info">Älä koskaan jaa käyttäjätunnusta ja salasanaasi ulkopuolisille.</p>

            <div id="login-form">
              <div id="login-text">
                <p>Nimimerkki:</p>
              </div>            
              <input className="field" onChange={handleUsernameChange} type="text"></input>            
            </div>

            <div id="login-form">
              <div id="login-text">
                <p>Salasana:</p>
              </div>           
              <input className="field" type="password" onChange={handlePasswordChange}></input>           
            </div>
                        
            <div id="buttons">   
            <button className="button" onClick={login}>Kirjaudu sisään</button> 
            </div> 
            <div id="login-status">
              <p>{loginStatus.msg}</p>
            </div>       
          </>
      )}
          <br/> <br/>
        {<Register setShowLogin={setShowLogin} />}
    </div>
  );
}
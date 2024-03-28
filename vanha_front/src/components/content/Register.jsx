import React, { useState } from 'react';

const Register = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const openRegisterForm = () => {
    setShowRegisterForm(true);
  }

  const closeRegisterForm = () => {
    setShowRegisterForm(false);
  }

  const register = () => {
    // logiikka
    alert('click');
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

          <p>Nimimerkki: <input className="field" type="text" placeholder="Valitse nimimerkki" /></p>
          <p>Salasana: <input className="field" type="text" placeholder="Valitse salasana" /></p>
          <button class="green" onClick={register}>Rekisteröidy</button> 
          <button onClick={closeRegisterForm}>Peruuta</button>

        </div>
      )}
    </div>
  );
};

export default Register;
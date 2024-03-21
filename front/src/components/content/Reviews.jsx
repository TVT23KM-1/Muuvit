import React, { useState } from 'react';

const Reviews = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const closeReviewForm = () => {
    setShowReviewForm(false);
  }

  const openReviewForm = () => {
    setShowReviewForm(true);
  }

  const searchReviews = () => {
    // Logiikka arvostelujen hakemiselle
    alert('Haku suoritettu!');
  }

  const createReview = () => {
    // Logiikka uuden arvostelun luomiselle
    alert('Arvostelu luotu!');
  }

  return (
    <div>
      <h2>Arvostelut</h2>

      <b>Etsi arvostelua</b> <br/>
      <input className="field" type="text" placeholder="Hae arvostelua"></input>
      <button onClick={searchReviews}>Hae</button> <br/><br/>

      {!showReviewForm ? (
        <a onClick={openReviewForm}>Tai luo uusi arvostelu (Avaa)</a>
      ) : (
        <div id="createReview">
          <b>Uusi arvostelu</b> (<a onClick={closeReviewForm}>Sulje</a>) <br/><br/>

          <b>Valitse elokuva:</b> (search) <br/>
          <b>Anna tähdet: </b>
          <select className="field" defaultValue="5">
            <option value="1">&#11088; [1/5] tähteä</option>
            <option value="2">&#11088;&#11088; [2/5] tähteä</option>
            <option value="3">&#11088;&#11088;&#11088; [3/5] tähteä</option>
            <option value="4">&#11088;&#11088;&#11088;&#11088; [4/5] tähteä</option>
            <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088; [5/5] tähteä</option>
          </select>
          <p><b>Perustelut:</b> <br/>
          <textarea className="box" placeholder="Kirjoita arvostelu tähän"></textarea></p>
          <button onClick={createReview}>Lähetä arvostelu</button>
        </div>
      )}

      <hr />


      <b>Lähetetty:</b> 00.00.2024 <br/>
      <b>Kohde: </b> Movie or serie <br/>
      <b>Synopsis:</b> <a href="#">Avaa</a> <br/>
      ---------------------------------------------------------------------------- <br/>
      <b>Käyttäjältä:</b> <i>Anonymous</i> <br/>
      <b>Arvio:</b> &#11088;&#11088;&#11088;&#11088;&#11088; [5/5] tähteä <br/>
      <b>Perustelut:</b> <br/>
      Text text text text text text text text Text text text text text text text text 
      Text text text text text text text text Text text text text text text text text Text text text text text text text text Text text text text text text text text 
      Text text text text text text text text Text text text text text text text text Text text text text text text text text Text text text text text text text text 
      Text text text text text text text text Text text text text text text text text Text text text text text text text text Text text text text text text text text 
      Text text text text text text text text Text text text text text text text text <br/><br/>

      <b>Lähetetty:</b> 00.00.2024 <br/>
      <b>Kohde: </b> Movie or serie <br/>
      <b>Synopsis:</b> <a href="#">Avaa</a> <br/>
      ---------------------------------------------------------------------------- <br/>
      <b>Käyttäjältä:</b> <i>Anonymous</i> <br/>
      <b>Arvio:</b> &#11088;&#11088;&#11088;&#11088;&#11088; [5/5] tähteä <br/>
      <b>Perustelut:</b> <br/>
      Text text text text text text text text Text text text text text text text text 
      Text text text text text text text text Text text text text text text text text Text text text text text text text text Text text text text text text text text 
      Text text text text text text text text Text text text text text text text text Text text text text text text text text Text text text text text text text text 
      Text text text text text text text text Text text text text text text text text Text text text text text text text text Text text text text text text text text 
      Text text text text text text text text Text text text text text text text text <br/><br/>

    </div>
  );
};

export default Reviews;
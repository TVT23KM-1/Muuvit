import React, { useState } from 'react';
import ShowReviews from "@content/ShowReviews.jsx";

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

          <b>Anna tähdet: </b>
          <select className="field" defaultValue="5">
            <option value="1">&#11088; [1/5] tähteä</option>
            <option value="2">&#11088;&#11088; [2/5] tähteä</option>
            <option value="3">&#11088;&#11088;&#11088; [3/5] tähteä</option>
            <option value="4">&#11088;&#11088;&#11088;&#11088; [4/5] tähteä</option>
            <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088; [5/5] tähteä</option>
          </select>

          <div id="buttons">
            <button onClick={createReview}>Lähetä arvostelu</button>
          </div>
        </div>
      )}

      <hr />

        <ShowReviews/>

    </div>
  );
};

export default Reviews;
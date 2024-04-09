import React, { useState } from 'react';
import axios from 'axios'
import '../../index.css'
import '@pages/css/Login.css'
import '@content/css/Review.css'


const Review = () => {

    const sendReview = () => {
        console.log('arvostelu')
    }

    return (
        <>
        <div>
            <h2>Arvostele elokuva tai sarja</h2>
        </div>
            <div id='review'>
             <form id='reviewForm'>
                
                <label>Kirjoita arvostelu:
                <input id="reviewText" placeholder="Kirjoita arvostelu tähän"></input>
                </label>
            </form>


        </div>

        <div id="createReview">
          <b>Uusi arvostelu</b> 

          <b>Valitse elokuva:</b> (search) <br/>
          <b>Anna tähdet: </b>
          <select className="field" defaultValue="5">
            <option value="1">&#11088; [1/5] tähteä</option>
            <option value="2">&#11088;&#11088; [2/5] tähteä</option>
            <option value="3">&#11088;&#11088;&#11088; [3/5] tähteä</option>
            <option value="4">&#11088;&#11088;&#11088;&#11088; [4/5] tähteä</option>
            <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088; [5/5] tähteä</option>
          </select>

          <button onClick={sendReview}>Lähetä arvostelu</button>
        </div>
                

        </>


    )
}

export default Review
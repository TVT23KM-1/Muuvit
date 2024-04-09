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
            <div id='review'>
                <h2>Arvostele elokuva tai sarja</h2>
                <div id="stars">
                <p>Anna tähdet: </p>
                        <select id="stars" defaultValue="5">
                            <option value="1">&#11088; [1/5] tähteä</option>
                            <option value="2">&#11088;&#11088; [2/5] tähteä</option>
                            <option value="3">&#11088;&#11088;&#11088; [3/5] tähteä</option>
                            <option value="4">&#11088;&#11088;&#11088;&#11088; [4/5] tähteä</option>
                            <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088; [5/5] tähteä</option>
                        </select>
                </div>
            <form id='reviewForm'>
                <textarea id="reviewText" placeholder="Kirjoita arvostelu tähän"></textarea>
                <div id='buttons'>
                    <button onClick={sendReview}>Lähetä arvostelu</button>
                    <button onClick={sendReview}>Hylkää</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default Review
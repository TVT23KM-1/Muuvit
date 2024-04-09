import React, { useState } from 'react';
import axios from 'axios'
import '../../index.css'
import '@pages/css/Login.css'
import '@content/css/Review.css'


const Review = () => {

    return (
        <>
        <div>
        <h2>Puuttuuko tunnus?</h2>
        </div>
        <div id='review'>
            <form>
                <label>Kirjoita arvostelu:
                <input type="text" />
      </label>
    </form>


        </div>
        </>


    )
}

export default Review
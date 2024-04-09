import React, { useState } from 'react';
import axios from 'axios'
import '../../index.css'
import '@pages/css/Login.css'
import '@content/css/Review.css'


const Review = () => {
    const [jwtToken, setJwtToken] = useState('')
    const [arvo,setArvo] = useState('3')
    const [reviewData, setReviewData] = useState({
        "movieId": 51,
        "stars" : 3,
        "description": "Vitun paska muuvi!"
    })
    const [reviewStatus, setReviewStatus] = useState({success:null, msg:''})

    const sendReview = () => {
        console.log('arvostelu')
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/review/private/newReview`, credentials)
    .then(function (response) {
      console.log(response.data)
      if (response.status === 200) {
        console.log('200 - arvostelu luotu')
        setReviewStatus({success:true,msg:'Arvostelu luotu'})
      }
    })
    .catch(function(error) {
      console.log(error.response.status)
      if (error.response && error.response.status===400) {
        console.log(error.response.status)
        console.log('400 - vituix män')
        setReviewStatus({success:false, msg:'Tietokantavirhe'})
      } else {
        console.log('ei yhteyyttä tietokantaan')
        setReviewStatus({success:false, msg:'Tietokantaan ei ole yhteyttä'})
      }


    })
  


    }

    

    const setTokenField = () => {
        setJwtToken(document.getElementById("tokenfield").value)
        console.log('arvostelu',jwtToken)
    }

    const myFunction = () => {
        var e = document.getElementById("starsSelected");
        setArvo(e.options[e.selectedIndex].value)        
        setReviewData({...reviewData, stars: e.options[e.selectedIndex].value})

      }

    return (
        <>
            <div id='review'>
                <h2>Arvostele elokuva tai sarja</h2>
                <div id="stars">
                <p>Anna tähdet: </p>
                        <select id="starsSelected" onChange={myFunction} defaultValue="5">
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
                    <button onClick={setTokenField}>Hylkää</button>
                </div>
            </form>
            </div>
            <div>
                 <input id='tokenfield' className="field" onChange={setTokenField} type="text" placeholder="Token" />      
              </div>
              <text>{jwtToken}</text>
              <text><p>movieId  {reviewData.movieId}</p></text>
              <text><p>stars {reviewData.stars}</p></text>
              <text><p>stars {arvo}</p></text>
        </>
    )
}

export default Review
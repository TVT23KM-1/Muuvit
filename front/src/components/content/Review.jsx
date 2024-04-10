import React, {useEffect, useState} from 'react';
import axios from 'axios'
import '../../index.css'
import '@pages/css/Login.css'
import '@content/css/Review.css'
import {useLoginData} from "../../context/useLoginData.jsx";


const Review = () => {
    const [numberOfStars, setNumberOfStars] = useState(3)
    const [reviewData, setReviewData] = useState({
        "movieId": 51,
        "stars": 3,
        "description": "Vitun paska muuvi!"
    })
    const [reviewDescription, setReviewDescription] = useState('')
    const [reviewStatus, setReviewStatus] = useState({success: null, msg: 'saas'})
    const loginData = useLoginData()

    useEffect(() => {
        setReviewData({...reviewData, movieId: 51, stars: numberOfStars, description: reviewDescription})
    }, [numberOfStars])

    const sendReview = (ev) => {
        ev.preventDefault()
        axios({
            url: `${import.meta.env.VITE_BACKEND_URL}/review/private/newReview`,
            method: 'post',
            data: reviewData,
            withCredentials: true,
            headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${loginData.token}`
            }
        }).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error)
        })
    }

    const onSelectChange = (ev) => {
        setNumberOfStars(ev.target.value);
    }

    return (
        <>
            <div id='review'>
                <h2>Arvostele elokuva tai sarja</h2>
                <div id="stars">
                    <p>Anna tähdet: </p>
                    <select id="starsSelected" value={numberOfStars} onChange={onSelectChange}>
                        <option value="1">&#11088; [1/5] tähteä</option>
                        <option value="2">&#11088;&#11088; [2/5] tähteä</option>
                        <option value="3">&#11088;&#11088;&#11088; [3/5] tähteä</option>
                        <option value="4">&#11088;&#11088;&#11088;&#11088; [4/5] tähteä</option>
                        <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088; [5/5] tähteä</option>
                    </select>
                </div>
                    <textarea id="reviewText" placeholder="Kirjoita arvostelu tähän" value={reviewDescription} onChange={(ev) => {setReviewDescription(ev.target.value)}}></textarea>
                    <div id='buttons'>
                        <button onClick={sendReview}>Lähetä arvostelu</button>
                    </div>
            </div>
            <p>{loginData.token}</p>
            <div><p>movieId {reviewData.movieId}</p></div>
            <div><p>stars {reviewData.stars}</p></div>
            <div><p>stars {numberOfStars}</p></div>
            <div id="login-form">
                <p>{reviewStatus.msg}</p>
            </div>

        </>
    )
}

export default Review
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import '../../index.css'
import styles from '@content/css/Review.module.css';
//import '@pages/css/Login.css'
//import '@content/css/Review.css'
import {useLoginData} from "@context/useLoginData.jsx";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Review = () => {
    const{type, id, title} = useParams()
    const [numberOfStars, setNumberOfStars] = useState(3)
    const [reviewData, setReviewData] = useState({
        "type": type,
        "movieId": id,
        "stars": 3,
        "description": "Teekannu"
    })
    const [reviewDescription, setReviewDescription] = useState('')
    const [tyyppi, setTyyppi] = useState('tyyppi')
    const [reviewStatus, setReviewStatus] = useState({success: null, msg: 'Ei lähetty'})
    const loginData = useLoginData()

    

    

    useEffect(() => {
        setReviewData({...reviewData, movieId: id, stars: numberOfStars, description: reviewDescription})
        setTyyppi(type=='tv' ? 'TV-sarja' : 'elokuva' )
    }, [numberOfStars, reviewDescription])

    
    
   const sendReview = (ev) => {
        setReviewStatus({success: null, msg: 'Lähetetty'})
        ev.preventDefault()
        axios({
            url: `${import.meta.env.VITE_BACKEND_URL}/review/private/newReview`,
            method: 'post',
            data: reviewData,
            withCredentials: true,
            headers: {
                    allow: 'application/json',
                    "Authorization": `Bearer ${loginData.token}`
            }
        }).then(function (response) {
            console.log('hello1')
            setReviewStatus({success: true, msg: '200 - onnistui'})
        }).catch(function (err ) {
            console.log('hello2')
            console.log(err.name)
            console.log(err.message)
            setReviewStatus({success: false, msg: err.message})
        })
        .catch(function (error ) {
            console.log('hello3')
            console.log(error.message)
            console.log(error.response)
            setReviewStatus({success: false, msg: error.message})
        })
    }

    const onSelectChange = (ev) => {
        setNumberOfStars(ev.target.value);
    }

    const navigate=useNavigate()

    function handlePaluu() {
        navigate().goBack();
    }

    
    

    return (
        <>
            <div className={styles.review}>
                <h2>Arvostele {tyyppi} {title}</h2>
                <div className={styles.stars}>
                    <p>Anna tähdet: </p>
                    <select className={styles.starsSelected} value={numberOfStars} onChange={onSelectChange}>
                        <option value="1">&#11088; [1/5] tähteä</option>
                        <option value="2">&#11088;&#11088; [2/5] tähteä</option>
                        <option value="3">&#11088;&#11088;&#11088; [3/5] tähteä</option>
                        <option value="4">&#11088;&#11088;&#11088;&#11088; [4/5] tähteä</option>
                        <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088; [5/5] tähteä</option>
                    </select>
                </div>
                    <textarea className={styles.reviewText} placeholder="Kirjoita arvostelu tähän" value={reviewDescription} onChange={(ev) => {setReviewDescription(ev.target.value)}}></textarea>
                    <div className={styles.buttons}>
                        <button onClick={sendReview}>Lähetä arvostelu</button>
                        <button onClick={handlePaluu}>Palaa takaisin</button>
                    </div>
            </div>
            <p>{loginData.token}</p>
            <div><p>movieId: {reviewData.movieId}</p></div>
            <div><p>type: {reviewData.type}</p></div>
            <div><p>stars: {reviewData.stars}</p></div>
            <div><p>description: {reviewData.description}</p></div>
            <div><p>title: {title}</p></div>
            <div><p>type: {type}</p></div>
            <div><p>tyyppi: {tyyppi}</p></div>
            <div>
                <p>review status: {reviewStatus.msg}</p>
            </div>

        </>
    )
}

export default Review
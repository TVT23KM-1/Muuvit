import React, {useState, useEffect} from 'react';
import styles from'./css/Home.module.css';
import Backdrop from "@content/Backdrop.jsx";
import axios from 'axios';
import { differenceInCalendarQuarters } from 'date-fns';

/**
 * Home component is used to show the home page.
 * @returns {Element}
 */


const tmdbImageFilePath = 'https://image.tmdb.org/t/p/w1280/';


const Home = () => {

    const [showBackdrop, setShowBackdrop] = useState(true);
    const [reviewStatus, setReviewStatus] = useState(true);
    const [carouselleImage, setCarouselleImage] = useState('');
    const [carouselleData, setCarouselleData] = useState([]); 
    const [rndNum, setRndNum] = useState(0)


    const [time, setTime] = useState(5);

    useEffect(() => {
      let timer = setInterval(() => {
        setTime((time) => {
          if (time === 0 ) {
            //clearInterval(timer);
            changeImage();
            return 6;
          } else {
            return time-1
          }
        });
      }, 1000);
    },[]);
  

    const changeImage = () => {
        setRndNum(randomNumberInRange(0, 19));
        //console.log(carouselleData)
        
    }
    const randomNumberInRange = (min, max) => {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    };





    useEffect(() => {
        getMovies()
    },[])
    
        const getMovies = () => {

            axios({
                url: `${import.meta.env.VITE_BACKEND_URL}/movie/movieCarouselle/getMovies`,
                method: 'get',
            }).then(function (response) {
                console.log(response.status)

                setCarouselleImage(tmdbImageFilePath + response.data.results[0].backdrop_path)
                console.log(response.data.results.length)
                console.log(response.data.results)
                const responseData = response.data.results
                console.log(responseData)
                console.log(responseData.length)
                setCarouselleData(responseData.json)
                console.log(carouselleData)
            }).catch(function (err ) {
                if (err.message=="Network Error") {
                    console.log(err.status)
                    console.log(err)
                    setReviewStatus({success: false, msg: 'Ei yhteyttä tietokantaan'})
                } else {
                    setReviewStatus({success: false, msg: 'tunnistamaton virhe'})
                }

            })

        }



    return (
        <div className = {styles.home}>
            <div className={styles.page}>
                <h2>Tervetuloa Muuvi -palveluun! </h2>
                <p>
                    Kaipaatko paikkaa, jossa intohimo elokuviin ja sarjoihin yhdistää meidät kaikki? Muuvi on portti
                    jännittävään yhteisöön, missä voit liittyä ryhmiin, jakaa ajatuksiasi leffoista ja sarjoista
                    ryhmächateissa, sekä lukea ja kirjoittaa arvosteluja. Lisäksi tarjoamme ainutlaatuisen
                    Finnkino-elokuvanäytöshakumme sekä kattavan leffahakumme, joiden avulla löydät helposti juuri sinua
                    kiinnostavat elokuvat ja sarjat.
                </p>
            </div>
            <div className={styles.poster}>
                            <img src ={carouselleImage} alt='elokuvan posterikuva'></img>
                        <br/>
            </div>
            <p> {time},{rndNum}</p>
        </div>
    )
}

export default Home;

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
var data=[]


const Home = () => {

    const [carouselleImage, setCarouselleImage] = useState('');
    const [carouselleTitle, setCarouselleTitle] = useState('');
    const [carouselleOverview, setCarouselleOverview] = useState('');

    const [blockGetMovies, setBlockGetMovies] =useState(false)
    const [imgNum, setImgNum] = useState(0)
    
    const timerTime = 10000

    const [time, setTime] = useState(timerTime);
    const [timerIsSet, setTimerIsSet] = useState(false);


    useEffect(() => {
        if (! timerIsSet) {
            setTimerIsSet(true)
      let timer = setInterval(() => {
        
        setTime((time) => {
          if (time >= data.length ) {
            return 0;
          } else {
            changeImage(time);
            return time+1
          }
        });
      }, timerTime);
    }
    },[]);
  

    const changeImage = (time) => {
        console.log(data, data.length, time)

        setCarouselleImage(tmdbImageFilePath + data[time].backdrop_path)
        setCarouselleTitle(data[time].title)
        setCarouselleOverview(data[time].overview)
    }

    useEffect(() => {
        if (! blockGetMovies) getMovies()
        .then((response) => {
            console.log(response.status)
            setCarouselleImage(tmdbImageFilePath + response.data.results[0].backdrop_path)
            setCarouselleTitle(response.data.results[0].title)
            setCarouselleOverview(response.data.results[0].overview)
            console.log(response.data.results.length)

            data = response.data.results
            console.log(data, data.length)
 
            if(data?.length>0 ) 
                setBlockGetMovies(true)
        })
    },[blockGetMovies])
    
        const getMovies = async () => {

            const url= `${import.meta.env.VITE_BACKEND_URL}/movie/movieCarouselle/getMovies`
            let response = await axios.get(url)

            if (response.status === 200) {   
                return response;
            } else {
                throw new Error('Error fetching data');
            }          
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
            /<div className={styles.poster}>
                <img src ={carouselleImage} alt='elokuvan posterikuva'/> 
            </div> 
            <p> {time},{imgNum}</p>
            <div className={styles.page}>
                <h2>{carouselleTitle}</h2>
                <div>
                <p>
                    {carouselleOverview}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Home;

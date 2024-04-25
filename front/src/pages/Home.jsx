import React, {useState, useEffect} from 'react';
import styles from'./css/Home.module.css';
import Backdrop from "@content/Backdrop.jsx";
import axios from 'axios';
import { differenceInCalendarQuarters } from 'date-fns';

/**
 * Home component is used to show the home page.
 * @returns {Element}
 */


const tmdbImageFilePath = 'https://image.tmdb.org/t/p/w1280/'
const timerTime = 10000
var data=[]


const Home = () => {

    const [carouselleImage, setCarouselleImage] = useState('')
    const [carouselleTitle, setCarouselleTitle] = useState('')
    const [carouselleOverview, setCarouselleOverview] = useState('')
    const [imgNum, setImgNum] = useState(0)
    const [blockGetMovies, setBlockGetMovies] = useState(false)
    const [timerIsSet, setTimerIsSet] = useState(false);


    useEffect(() => {
        if (! timerIsSet) {
            setTimerIsSet(true)
      let timer = setInterval(() => {
        
        setImgNum((imgNum) => {
          if (imgNum >= data.length ) {
            return 0;
          } else {
            changeImage(imgNum);
            return imgNum+1
          }
        });
      }, timerTime);
    }
    },[]);
  

    const changeImage = (imgNum) => {
        console.log(data, data.length, imgNum)

        setCarouselleImage(tmdbImageFilePath + data[imgNum].backdrop_path)
        setCarouselleTitle(data[imgNum].title)
        setCarouselleOverview(data[imgNum].overview)
    }

    useEffect(() => {
        if (! blockGetMovies) getMovies()
        .then((response) => {
            console.log(response.status)
            setCarouselleImage(tmdbImageFilePath + response.data.results[0].backdrop_path)
            setCarouselleTitle(response.data.results[0].title)
            setCarouselleOverview(response.data.results[0].overview)
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
            
            <div className={styles.page}>
                <h2>{carouselleTitle}</h2>
                <p>{carouselleOverview}</p>
                <p> {imgNum}</p>
            </div>
        </div>
    )
}

export default Home;

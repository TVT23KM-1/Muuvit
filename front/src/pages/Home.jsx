import React, {useState, useEffect} from 'react';
import styles from'./css/Home.module.css';
import Backdrop from "@content/Backdrop.jsx";

/**
 * Home component is used to show the home page.
 * @returns {Element}
 */


const Home = () => {

    const [showBackdrop, setShowBackdrop] = useState(true);

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
                        <a href="https://www.themoviedb.org/" target="blank">
                            <img src="https://ew.com/thmb/Z94jGmuVcHjbuUDzp89HBkRKe7U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mcdtogu_ec001_h-7da98a08ef124745b03e6ab97c7cccdd.jpg"
                                 alt="TMDB logo"/>
                        </a>
                        <br/>
            </div>
        </div>
    )
}

export default Home;
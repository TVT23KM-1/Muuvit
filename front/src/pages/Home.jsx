import React, {useState, useEffect} from 'react';
import './css/Home.css';
import Backdrop from "@content/Backdrop.jsx";

/**
 * Home component is used to show the home page.
 * @returns {Element}
 */


const Home = () => {

    const [showBackdrop, setShowBackdrop] = useState(true);

    return (
        <>
            {showBackdrop && <Backdrop onClose={() => setShowBackdrop(!showBackdrop)}><p>JEEJEE</p></Backdrop>}
            <div className="page">
                <h2>Tervetuloa Muuvi -palveluun! </h2>
                <p>
                    Kaipaatko paikkaa, jossa intohimo elokuviin ja sarjoihin yhdistää meidät kaikki? Muuvi on portti
                    jännittävään yhteisöön, missä voit liittyä ryhmiin, jakaa ajatuksiasi leffoista ja sarjoista
                    ryhmächateissa, sekä lukea ja kirjoittaa arvosteluja. Lisäksi tarjoamme ainutlaatuisen
                    Finnkino-elokuvanäytöshakumme sekä kattavan leffahakumme, joiden avulla löydät helposti juuri sinua
                    kiinnostavat elokuvat ja sarjat.
                </p>
            </div>
        </>
    );
};

export default Home;
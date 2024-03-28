import React, { useState, useEffect } from 'react';

const Home = () => {

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'url(/images/backdrops/bd1.jpg)',
    'url(/images/backdrops/bd2.jpg)',
    'url(/images/backdrops/bd3.jpg)',
    'url(/images/backdrops/bd4.jpg)',
    'url(/images/backdrops/bd5.jpg)',
    'url(/images/backdrops/bd6.jpg)',
    'url(/images/backdrops/bd7.jpg)',
    'url(/images/backdrops/bd8.jpg)',
    'url(/images/backdrops/bd9.jpg)',
    'url(/images/backdrops/bd10.jpg)',
    'url(/images/backdrops/bd11.jpg)',
    'url(/images/backdrops/bd12.jpg)',
    'url(/images/backdrops/bd13.jpg)',
    'url(/images/backdrops/bd14.jpg)',
    'url(/images/backdrops/bd15.jpg)',
    'url(/images/backdrops/bd16.jpg)',
    'url(/images/backdrops/bd17.jpg)',
    'url(/images/backdrops/bd18.jpg)',
    'url(/images/backdrops/bd19.jpg)',
    'url(/images/backdrops/bd20.jpg)',
    'url(/images/backdrops/bd21.jpg)',
    'url(/images/backdrops/bd22.jpg)',
    'url(/images/backdrops/bd23.jpg)',
    'url(/images/backdrops/bd24.jpg)',

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
    }, 8500); 

    return () => clearInterval(interval);    
  }, [backgrounds.length]);

  const bgStyle = {
    backgroundImage: backgrounds[backgroundIndex],

  };

  return (

    <div className="page">

    <div className="movieBg" style={bgStyle}></div> <br/>


      <h2>Tervetuloa Muuvi -palveluun! </h2>

      <p>
      Kaipaatko paikkaa, jossa intohimo elokuviin ja sarjoihin yhdistää meidät kaikki? </p>

      <p>
      Muuvi on portti jännittävään yhteisöön, missä voit liittyä ryhmiin, jakaa ajatuksiasi leffoista ja sarjoista ryhmächateissa, sekä lukea ja kirjoittaa arvosteluja. Lisäksi tarjoamme ainutlaatuisen Finnkino -elokuvanäytöshakumme sekä kattavan leffahakumme, joiden avulla löydät helposti juuri sinua kiinnostavat elokuvat ja sarjat.
      </p>


      <p>
      Täällä yhteisöllisyys kohtaa elokuvien ja sarjojen maailman – tervetuloa kotiin elokuvafanien paratiisiin. Tervetuloa Muuviin.
      </p>

      <p className="info">
        Muuvi on OAMK tietotekniikan opiskelijoiden tekemä elokuvasovellusprojekti. Tarkoituksena on luoda leffaharrastajille sivusto. <br/>
        Sovellus hyödyntää avoimen datan lähteitä ja sille tehdään oma palvelin ja tietokanta datan hallintaan. <br/>
      </p>


    </div>

  );
};

export default Home;
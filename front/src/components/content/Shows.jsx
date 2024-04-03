import React, { useState } from 'react';
import Area from '@content/Area';
import Dates from '@content/Dates';
import Events from '@content/Events';
import Showtimes from '@content/Showtimes';
import styles from './Shows.module.css';
import { set } from 'date-fns';

const Shows = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showShowtimes, setShowShowtimes] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };
  
  const haeNaytosajat = () => {
    setShowShowtimes(true);
    setShowEvents(false);
  }

  const haeTapahtumat = () => {
    setShowEvents(true);
    setShowShowtimes(false);
  }
  // manuaalinen haun tyhjennys
  const tyhjennaHaku = () => {
    setShowShowtimes(false);
    setShowEvents(false);
    console.log('Lista tyhjennetty manuaalisesti');
  };
          
  return (
    <div className={styles.shows}>
      
      <h2>Näytösajat ja Tapahtumat</h2>

      <p>Finnkinon näytösajat ja tapahtumat haettavissa teattereittain ympäri Suomea.</p>

      <Area setSelectedArea={setSelectedArea} /> <br/>
      <Dates onSelectDate={handleDateSelection} /> <br/>

      <label htmlFor="date"> Valitse metodi:</label>
      <button onClick={haeNaytosajat}>Hae näytösajat</button>
      <button onClick={haeTapahtumat}>Teattereissa nyt</button>
      <button onClick={tyhjennaHaku}>Tyhjennä lista</button>

      <h3>Hakutulos:</h3>
      <hr/>
      
      {showEvents && <Events selectedArea={selectedArea} />}

      {showShowtimes && <Showtimes selectedArea={selectedArea} selectedDate={selectedDate} />}

    </div>

  );
};

export default Shows;

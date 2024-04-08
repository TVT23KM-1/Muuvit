import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@components/content/css/Events.module.css';

const Events = ({ selectedArea }) => {
  const [eventsData, setEventsData] = useState([]);

  const fetchData = async () => {
    if (!selectedArea) {
      console.error('Valitse alue ennen hakua.');
      return;
    }

    try {
      const response = await axios.get(`https://www.finnkino.fi/xml/Events/?listType=NowInTheatres&area=${selectedArea}`);
      const data = response.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      const events = Array.from(xmlDoc.getElementsByTagName('Event')).map(event => {
        const id = event.querySelector('ID')?.textContent || '';
        const title = event.querySelector('Title')?.textContent || '';
        const synopsis = event.querySelector('ShortSynopsis')?.textContent || '';
        const genres = event.querySelector('Genres')?.textContent || '';
        const imageUrl = event.querySelector('EventMediumImagePortrait')?.textContent || '';
        const trailerUrl = event.querySelector('Videos EventVideo Location')?.textContent || '';

        return { id, title, synopsis, genres, imageUrl, trailerUrl };
      });
      setEventsData(events);
    } catch (error) {
      console.error('Virhe haettaessa tapahtumia:', error);
    }
  };
  
  useEffect(() => {fetchData()}, [selectedArea]);

  return (
    <div className={styles.event}>
      {eventsData.map(event => (
        <div key={event.id}>
          <section>
            <h4>{event.title}</h4>
            <p>{event.synopsis}</p>
            <p>Genre: {event.genres}</p>
          </section>
          {event.imageUrl && <img src={event.imageUrl} alt={event.title} />}
        </div>
      ))}
    </div>
  );
};

export default Events;
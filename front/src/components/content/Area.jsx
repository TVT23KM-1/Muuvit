import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './css/Area.module.css';

const Area = ({ setSelectedArea }) => {
  
  const [theatreAreas, setTheatreAreas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.finnkino.fi/xml/TheatreAreas/');
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, 'text/xml');
      const areas = Array.from(xmlDoc.getElementsByTagName('TheatreArea')).map(area => ({
        id: area.querySelector('ID').textContent,
        name: area.querySelector('Name').textContent,
      }));
      setTheatreAreas(areas);
    } catch (error) {
      console.error('Virhe haettaessa teatterialueita:', error);
    }
  };

  useEffect(() => {fetchData()}, []);

  return (
    <div className={styles.area}>
      <label className={styles.label} htmlFor="area">Valitse elokuvateatteri tai alue:</label>
      <select className={styles.select} onChange={(e) => setSelectedArea(e.target.value)}>
        {theatreAreas.map(area => (
          <option key={area.id} value={area.id}>{area.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Area;
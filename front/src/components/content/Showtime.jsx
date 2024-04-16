import React from 'react'
import styles from './css/Showtime.module.css';
import { useLoginData } from '@context/useLoginData';

export default function Showtime({show_id, event_id, show_title, show_start_time, show_theatreAndAuditorium, onButtonClick, buttonName}) {
  const loginData = useLoginData();
    return (
    <div className={styles.showtime} key={show_id}>
        <div className={styles.upper}>
            <h4 className={styles.title}>{show_title}</h4>
            {loginData.token && <button onClick={()=> onButtonClick(event_id, show_id, show_title)}>{buttonName}</button>}
        </div>
        <p className={styles.info}>Alkaa: {show_start_time}</p>
        <p className={styles.info}>Teatteri ja sali: {show_theatreAndAuditorium}</p>
    </div>
  )
}

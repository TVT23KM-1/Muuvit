import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './css/Showtimes.module.css';

export default function Showtimes({selectedArea,selectedDate}) {
    const [showtimes, setShowtimes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        if (!selectedArea || !selectedDate) {
            console.error('Valitse alue ja päivämäärä');
            return;
        }
    
        setShowtimes([]);

        const formattedDate = new Date(selectedDate);
        const day = formattedDate.getDate() < 10 ? `0${formattedDate.getDate()}` : formattedDate.getDate();
        const month = (formattedDate.getMonth() + 1) < 10 ? `0${formattedDate.getMonth() + 1}` : formattedDate.getMonth() + 1;
        const formattedDateString = `${day}.${month}.${formattedDate.getFullYear()}`;
        
        console.log('Muotoiltu päivämäärä:', formattedDateString);
    
        try {
            const showsResponse = await axios.get(`https://www.finnkino.fi/xml/Schedule/?area=${selectedArea}&dt=${formattedDateString}`);
            const showsData = showsResponse.data; // Use .data property to access the response data
            const showsParser = new DOMParser();
            const showsXmlDoc = showsParser.parseFromString(showsData, 'text/xml');
            const shows = Array.from(showsXmlDoc.getElementsByTagName('Show')).map(show => {
                console.log(show);
                const id = show.querySelector('ID')?.textContent || '';
                const title = show.querySelector('Title')?.textContent || '';
                const start_time = show.querySelector('dttmShowStart')?.textContent || '';

                return { id, title, start_time };
            });
            setShowtimes(shows);
            setLoading(false); // Set loading state to false after data is fetched
        } catch (error) {
            console.error('Virhe haettaessa näytösaikoja:', error);
        }
        
    }

    useEffect(() => {fetchData()}, [selectedArea, selectedDate]);

    const formattedShowtimes = showtimes.map(show => {
            const startDateTime = new Date(show.start_time);
            
            const day = startDateTime.getDate() < 10 ? `0${startDateTime.getDate()}` : startDateTime.getDate();
            const month = (startDateTime.getMonth() + 1) < 10 ? `0${startDateTime.getMonth() + 1}` : startDateTime.getMonth() + 1;
            const year = startDateTime.getFullYear();
            const hours = startDateTime.getHours() < 10 ? `0${startDateTime.getHours()}` : startDateTime.getHours();
            const minutes = startDateTime.getMinutes() < 10 ? `0${startDateTime.getMinutes()}` : startDateTime.getMinutes();
            
            const formattedStartTime = `${day}.${month}.${year} klo ${hours}:${minutes}`;

            return {
                    ...show,
                    start_time: formattedStartTime,
            };
    });

    return (
            <div className={styles.showtimes}>
                {loading ? (
                        <p>Loading...</p>
                ) : (
                        formattedShowtimes.map(show => ( 
                                <div key={show.id}>
                                    <h4>{show.title}</h4>
                                    <p>Alkaa: {show.start_time}</p>
                                </div>
                        ))
                )}
            </div>
    )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './css/Showtimes.module.css';
import { useLoginData} from '@context/useLoginData'

export default function Showtimes({selectedArea,selectedDate}) {
    const [showtimes, setShowtimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [myGroups, setMyGroups] = useState([]); // [ { id: 1, name: 'Ryhmä 1' }, { id: 2, name: 'Ryhmä 2' }
    const [selectedGroup, setSelectedGroup] = useState('');
    const loginData = useLoginData();

    const handleDropdownChange = (event) => {
        setSelectedGroup(event.target.value);
    }

    const postEvent = () => {
        console.log('Lisätään ryhmään');
    }
    
    const fetchGroups = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/groups`, {
                withCredentials: true,
                headers: { Authorization: `bearer ${loginData.token}`
                } 
            });
            if(response.status === 200) {
                setMyGroups(response.data);
            }
        } catch (error) {
            console.error('Virhe haettaessa ryhmiä:', error);
        }
    }

    useEffect(() => {fetchGroups()}, [loginData.token]);
    

    const fetchData = async () => {
        if (!selectedArea || !selectedDate) {
            console.log('Valitse alue ja päivämäärä');
            return;
        }
    
        setShowtimes([]);

        const formattedDate = new Date(selectedDate);
        const day = formattedDate.getDate() < 10 ? `0${formattedDate.getDate()}` : formattedDate.getDate();
        const month = (formattedDate.getMonth() + 1) < 10 ? `0${formattedDate.getMonth() + 1}` : formattedDate.getMonth() + 1;
        const formattedDateString = `${day}.${month}.${formattedDate.getFullYear()}`;
        
        console.log('Muotoiltu päivämäärä:', formattedDateString);
    
        try {
            const showsResponse = await axios.get(`https://www.finnkino.fi/xml/Schedule/?area=${selectedArea}&dt=${formattedDateString}`)
            const showsData = showsResponse.data; // Use .data property to access the response data
            const showsParser = new DOMParser();
            const showsXmlDoc = showsParser.parseFromString(showsData, 'text/xml');
            const shows = Array.from(showsXmlDoc.getElementsByTagName('Show')).map(show => {
                console.log(show);
                const id = show.querySelector('ID')?.textContent || '';
                const title = show.querySelector('Title')?.textContent || '';
                const start_time = show.querySelector('dttmShowStart')?.textContent || '';
                const theatreAndAuditorium = show.querySelector('TheatreAndAuditorium')?.textContent || '';
                return { id, title, start_time, theatreAndAuditorium };
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
                <>
                    {formattedShowtimes.map(show => (
                        <div className={styles.showtime} key={show.id}>
                            <div className={styles.upper}>
                                <h4 className={styles.title}>{show.title}</h4>
                                {loginData.token && <select className={styles.select} onChange={handleDropdownChange}>
                                    {myGroups.length > 0 ? <option value="">Lisää ryhmään</option> :
                                    <option value="">Ei ryhmiä</option>}
                                    {myGroups.map(group => (
                                        <option key={group.id} value={group.id}>{group.name}</option>
                                    ))}
                                </select>}
                            </div>
                            <p className={styles.info}>Alkaa: {show.start_time}</p>
                            <p className={styles.info}>Teatteri ja sali: {show.theatreAndAuditorium}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

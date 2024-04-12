import React from 'react'
import {useState, useEffect} from 'react'
import { useLoginData } from '../../context/useLoginData';
import styles from './css/PostEventToGroup.module.css';
import axios from 'axios';

export default function PostEventToGroup({ eventId, showId, setShowPostEvent}) {
    const [myGroups, setMyGroups] = useState({ groups: [], found: false });
    const [group, setGroup] = useState('');
    const loginData = useLoginData();
    const [postEventStatus, setPostEventStatus] = useState('');

    const selectGroup = (e) => {
        console.log('Valittu ryhmä:', e.target.value);
        setGroup(e.target.value);
    }
    
    const closeForm = () => {
        setShowPostEvent(false);
        setPostEventStatus('');
        setGroup('');
    }
    const postEvent = async () => {
        if (group==='') {
            console.log('Valitse ryhmä');
            return;
        }

        const body = {"group_id": group, "event_id": eventId, "show_id": showId};
        console.log('Lähetettävä data:', body);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/event/private/addToGroup`, body, {
                withCredentials: true,
                headers: { Authorization: `bearer ${loginData.token}`,
                            'Content-Type': 'application/json'}
            });
            if (response.status === 200) {
                console.log('Tapahtuma lisätty ryhmään');
                setPostEventStatus('Tapahtuma lisätty ryhmään');
            }
        } catch (error) {
            console.error('Virhe lisättäessä tapahtumaa ryhmään:', error);
            setPostEventStatus('Virhe lisättäessä tapahtumaa ryhmään');
        }
    }

    const fetchGroups = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/private/mygroups`, {
                withCredentials: true,
                headers: { Authorization: `bearer ${loginData.token}` }
            });
            if (response.status === 200) {
                setMyGroups({groups: response.data, found: true});
            }
        } catch (error) {
            console.error('Virhe haettaessa ryhmiä:', error);
        }
    }

    useEffect(() => { fetchGroups() }, []);

    return (
        <div className={styles.selectGroup}>
            <label htmlFor='group'>Valitse ryhmä:</label>
            <select className={styles.select} onChange={selectGroup}>
                 {!myGroups.found ? <option value=''>Ei ryhmiä</option>: <option value=''>Valitse ryhmä</option>}
                 {myGroups.groups.map(group => (
                     <option key={group.groupId} value={group.groupId}>{group.groupName}</option>
                ))}
            </select>
            <p>{postEventStatus}</p>
            <button onClick={postEvent}>Lisää tapahtuma ryhmään</button>
            <button onClick={closeForm}></button>
        </div>
    )
}

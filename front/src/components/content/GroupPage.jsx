import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./css/GroupPage.module.css";

const GroupPage = () => {
    const [groupData, setGroupData] = useState();
    const [members, setMembers] = useState();
    const {groupId} = useParams();
    const renderMembers = () => {
        console.log(groupData)
        setMembers(
        groupData?.participantRegistrations.map(participant  =>{
            <li>{participant.user.username}</li>
        }))
    } 

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/groupData/${groupId}`)
            .then(response => {
                setGroupData(response.data)
                console.log("hello", response.data)
            })
            .catch(error => {
                console.error('Virhe haettaessa ryhmää', error);
            })
    },[])

    useEffect(() => {
        renderMembers()
        console.log('hellomembers')
    },[groupData])

    return (
        <>
            <h1 className={styles.title}>Ryhmän <span>{groupData?.groupName}</span> -sivu</h1>
            <p className={styles.description}>{groupData?.groupDescription}</p>
            <hr className={styles.horizontalRuler}/>
            <div className={styles.sectioni}>
                <h2>Ryhmän jäsenet</h2>
                <button>Näytä</button>
            </div>
            <div>
                <ul>
                    {members}
                    <li>Mikko</li>
                </ul>
            </div>
            <hr className={styles.horizontalRuler}/>
            <div className={styles.sectioni}>
                <h2>Ryhmän elokuvat</h2>
                <button>Näytä</button>
            </div>
            <hr className={styles.horizontalRuler}/>
            <div className={styles.sectioni}>
                <h2>Ryhmän sarjat</h2>
                <button>Näytä</button>
            </div>
            <hr className={styles.horizontalRuler}/>
            <div className={styles.sectioni}>
                <h2>Ryhmän näytökset</h2>
                <button>Näytä</button>
            </div>
            <hr className={styles.horizontalRuler}/>

        </>
    );
}

export default GroupPage;
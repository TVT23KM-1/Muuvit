import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./css/GroupPage.module.css";

const GroupPage = () => {
    const [groupName, setGroupName] = useState();
    const [groupData, setGroupData] = useState();
    const {groupId} = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/groupData/${groupId}`)
            .then(response => {
                setGroupData(response.data)
                setGroupName(response.data.groupName);
            })
            .catch(error => {
                console.error('Virhe haettaessa ryhmää', error);
            })
    })

    return (
        <>
            <h1 className={styles.title}>Ryhmän <span>{groupName}</span> -sivu</h1>
            <p className={styles.description}>{groupData?.groupDescription}</p>
            <hr className={styles.horizontalRuler}/>
            <div className={styles.sectioni}>
                <h2>Ryhmän jäsenet</h2>
                <button>Näytä</button>
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
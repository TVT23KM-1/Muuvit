
import styles from './css/GroupResult.module.css';
import axios from "axios";
import {useLoginData} from "@context/useLoginData.jsx";
import {useEffect, useState} from "react";

/**
 * GroupResult komponentti esittää yksittäisen ryhmän tiedot.
 * @param name Ryhmän nimi
 * @param description Ryhmän kuvaus
 * @param memberCount Ryhmän jäsenmäärä
 * @param id Ryhmän id
 * @param onRequestedJoinGroup Callback, joka kutsutaan axioksen response parametrillä kutsun onnistuessa
 * @param onFailRequestedJoinGroup Callback, joka kutsutaan axioksen error parametrillä kutsun epäonnistuessa
 * @returns {JSX.Element}
 * @constructor
 */
const GroupResult = ({ name, description, memberCount, groupId, onRequestedJoinGroup, onFailRequestedJoinGroup }) => {

    const [membershipPending, setMembershipPending] = useState(false);
    const creds = useLoginData();
    const requestToJoinGroup = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/private/joingroup/${groupId}`, {
            withCredentials: true,
            headers: {
                "Authorization": `Bearer ${creds.token}`
            }
        }).then(response => {
            setMembershipPending(true);
            onRequestedJoinGroup(response);
        }).catch(error => {
            onFailRequestedJoinGroup(error);
        });
    }

    const showGroupPage = () => {
        console.log('showgrouppage')
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/private/queryMyGroupMembership/${groupId}`, {
            withCredentials: true,
            headers: {
                "Authorization": `Bearer ${creds.token}`
            }
        }).then(response => {
            setMembershipPending(response.data === 'pending');
            console.log(membershipPending)
        }).catch(error => {
            console.error(error);
        });
    }, [])

    return (
        <div className={styles.container}>
            <h3>{name}</h3>
            <p>{memberCount} jäsentä</p>
            <p>{description}</p>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={requestToJoinGroup} disabled={membershipPending}>{membershipPending ? "Olet jo pyytänyt liittyä" : "Pyydä liittyä ryhmään"}</button>
                <button className={styles.button} onClick={showGroupPage} >Näytä ryhmäsivu</button>   
            </div>
        </div>
    )
}

export default GroupResult;
import styles from '@content/css/CreateGroup.module.css';
import '../../index.css'
import React, {useEffect} from "react";
import axios from 'axios';
import {useState} from 'react';
import {useLoginData} from '@context/useLoginData.jsx';

/**
 * CreateGroups komponentti esittää formin jolla voi luoda uusia ryhmiä.
 * @param onCreateGroup -funktio saa parametreinään ryhmän nimen ja kuvauksen. Funktiolla ei ole paluuarvoa.
 * @returns {Element}
 * @constructor
 */
const CreateGroups = (onCreateGroup) => {

    const loginData = useLoginData();

    const getAllGroups = () => {
        console.log('getAllGroups');
    }

    const getOwnGroups = () => {
        console.log('getOwnGroups');
    }

    {/* Uusien ryhmien rekisteröinti */
    }
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [triggerOnCreateGroup, setTriggerOnCreateGroup] = useState(false);

    const createGroup = (ev) => {
        return axios.post(`${import.meta.env.VITE_BACKEND_URL}/group/private/create`, {
            groupName: groupName,
            description: groupDescription
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loginData.token}`
            }
        }).then((response) => {
            setTriggerOnCreateGroup(true);
            return response;
        }).catch((error) => {
            console.log("token:", loginData.token);
            console.log(error)
            return error
        })
    }

    useEffect(() => {
        if (triggerOnCreateGroup && onCreateGroup) {
            onCreateGroup(groupName, groupDescription);
        }
        setTriggerOnCreateGroup(false);
    }, [triggerOnCreateGroup]);

    return (
        <>
            <h2>Ryhmän luominen</h2>

            {/* Uusien ryhmien rekisteröinti */}
            <div className={styles.groupForm}>
                <label className={styles.groupNameLabel} htmlFor="group-name">Ryhmän nimi:</label>
                <input
                    className={styles.groupNameInput}
                    onChange={(ev) => setGroupName(ev.target.value)}
                    value={groupName}
                    type="text"
                    id="group-name"
                    name="group-name"
                    required/>
                <label className={styles.groupDescriptionLabel} htmlFor="group-description">Kuvaus:</label>
                <textarea
                    className={styles.groupDescriptionInput}
                    onChange={(ev) => setGroupDescription(ev.target.value)}
                    value={groupDescription}
                    id="group-description"
                    name="group-description"
                    required/>
                <button type="button" onClick={createGroup}>Luo ryhmä</button>
            </div>
        </>
    )
}

export default CreateGroups;
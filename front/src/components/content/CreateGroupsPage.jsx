import styles from '@content/css/CreateGroupPage.module.css';
import '../../index.css'
import React from "react";
import axios from 'axios';
import {useState} from 'react';
import {useLoginData} from '@context/useLoginData.jsx';

const CreateGroupsPage = () => {

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
            return response;
        }).catch((error) => {
            console.log("token:", loginData.token);
            console.log(error)
            return error
        })
    }


    return (
        <>
            <h2>Ryhmät</h2>

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

            <div id="buttons">
                <button className="button" onClick={getAllGroups}>Luo uusi ryhmä</button>
            </div>
            <div id="buttons">
                <button className="button" onClick={getOwnGroups}>Luo uusi ryhmä</button>
            </div>
        </>
    )
}

export default CreateGroupsPage;
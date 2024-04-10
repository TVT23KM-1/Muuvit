import styles from './css/GroupPage.module.css';
import '../index.css'
import React from "react";
import axios from 'axios';
import {useState} from 'react';
import {useLoginData} from '../context/useLoginData';

const GroupsPage = () => {

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
        <div>
            <h2>Ryhmät</h2>

            {/* Uusien ryhmien rekisteröinti */}
            <div id="group-form">
                <label htmlFor="group-name">Ryhmän nimi:</label>
                <input
                    onChange={(ev) => setGroupName(ev.target.value)}
                    value={groupName}
                    type="text"
                    id="group-name"
                    name="group-name"
                    required/>
                <label htmlFor="group-description">Kuvaus:</label>
                <textarea
                    onChange={(ev) => setGroupDescription(ev.target.value)}
                    value={groupDescription}
                    id="group-description"
                    name="group-description"
                    required/>
                <button type="button" onClick={createGroup}>Luo ryhmä</button>
            </div>

            {/*<div className={styles.}>*/}
            {/*    <PaginatorNavigateMenu currentPage={page} totalPages={10} onPageChange={setPage}/>*/}
            {/*    /!*{searchData}*!/*/}
            {/*    <PaginatorNavigateMenu currentPage={page} totalPages={10} onPageChange={setPage}/>*/}
            {/*</div>*/}

            <div id="buttons">
                <button className="button" onClick={getAllGroups}>Luo uusi ryhmä</button>
            </div>
            <div id="buttons">
                <button className="button" onClick={getOwnGroups}>Luo uusi ryhmä</button>
            </div>
            {/*<div id="group-status">*/}
            {/*    <p>{groupStatus.msg}</p>*/}
            {/*</div>*/}
        </div>
    )
}

export default GroupsPage;
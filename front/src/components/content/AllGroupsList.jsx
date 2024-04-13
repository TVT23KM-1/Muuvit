//import styles from './css/AllGroupsList.module.css';
//import React from 'react';
import axios from 'axios';
import '../../index.css';
import React, {useEffect, useState} from 'react';
import PaginatedAllGroups from "@content/PaginatedAllGroups.jsx";


const AllGroupsList = ({showAllGroups, setShowAllGroups}) => {
    const [showGroupsWidget, setShowGroupsWidget] = useState(false);


    const getPage = (page) => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/groupslist/${page}`)
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={() => setShowGroupsWidget(!showGroupsWidget)}>{showGroupsWidget ? "Piilota ryhmät" : "Näytä ryhmät"}</button>
            {showGroupsWidget && <PaginatedAllGroups />}
        </div>
    )
}

export default AllGroupsList;

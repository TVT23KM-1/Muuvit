import React, {useEffect, useState} from 'react'
import CreateGroups from "@content/CreateGroups.jsx";
import ShowReviews from "@content/ShowReviews.jsx";
import styles from "./css/Community.module.css";
import AllGroupsList from "@content/AllGroupsList.jsx";

const Community = () => {

    const [groupCreated, setGroupCreated] = useState(false);
    const [groupCreatedError, setGroupCreatedError] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setGroupCreated(false);
        }, 3000);
    }, [groupCreated]);

    useEffect(() => {
        setTimeout(() => {
            setGroupCreatedError(false);
        }, 4000);
    }, [groupCreatedError]);

    const setErrorMessage = (error) => {
        console.log(error)
        if (error.response.status === 400) {
            setError("Ryhmän luonti epäonnistui. Onko ryhmä jo olemassa?")
        } else {
            setError("Ryhmän luonti epäonnistui.")
        }
        setGroupCreatedError(true);
    }


    // Show create groups and show all groups
    const [showCreateGroups, setShowCreateGroups] = useState(false);
    const [showAllGroups, setShowAllGroups] = useState(false);


    return (
        <div className={styles.container}>
            <h2>Yhteisö</h2>

            <div className={styles.buttonContainer}>
                <button className={styles.buttonStyle}
                    onClick={() => setShowAllGroups(!showAllGroups)}>{showAllGroups ? "Piilota ryhmät" : "Näytä ryhmät"}</button>
                <button className={styles.buttonStyle}
                        onClick={() => setShowCreateGroups(!showCreateGroups)}>{showCreateGroups ? "Piilota ryhmän luonti" : "Luo ryhmä"}</button>
            </div>
            {showAllGroups && <AllGroupsList showAllGroups={showAllGroups}/>}
            {showCreateGroups && (
                <CreateGroups
                    onCreateGroup={(groupName, groupDescription) => {
                        setGroupCreated(!groupCreated)
                        setGroupName(groupName)
                    }}
                    onError={(err) => {
                        setErrorMessage(err);
                    }}/>)}
            {groupCreated && <p className={styles.groupCreated}>Ryhmä {groupName} luotu!</p>}
            {groupCreatedError && <p className={styles.groupCreatedError}>{error}</p>}

            <ShowReviews/>
        </div>
    )
        ;
};

export default Community;
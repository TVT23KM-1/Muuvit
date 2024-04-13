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

    return (
        <div className="page">
            <h2>Yhteisö</h2>

            <h3>Ryhmät</h3>
            <h4>Kaikki ryhmät</h4>
            <AllGroupsList/>

            <h4>Luo ryhmä</h4>
            <CreateGroups
                onCreateGroup={(groupName, groupDescription) => {
                    setGroupCreated(!groupCreated)
                    setGroupName(groupName)
                }}
                onError={(err) => {
                        setErrorMessage(err);
                }}/>
            {groupCreated && <p className={styles.groupCreated}>Ryhmä {groupName} luotu!</p>}
            {groupCreatedError && <p className={styles.groupCreatedError}>{error}</p>}
            <h3>Arvostelut</h3>
            <ShowReviews/>
        </div>
    );
};

export default Community;
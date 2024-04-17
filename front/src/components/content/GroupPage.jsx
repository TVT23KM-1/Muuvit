import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./css/GroupPage.module.css";
import {useLoginData} from "@context/useLoginData.jsx";
import ViewGroupEvents from './ViewGroupEvents';
import ResolveRequests from './ResolveRequests';

const GroupPage = () => {
    const [groupData, setGroupData] = useState(null);
    const [members, setMembers] = useState();
    const {groupId} = useParams();
    const [showEvents, setShowEvents] = useState(false);
    const loginData = useLoginData();
    const [userIsOwner, setUserIsOwner] = useState(false);
    const [joinRequests, setJoinRequests] = useState([]);
    const [resolved, setResolved] = useState(false);
    const [showResolveRequests, setShowResolveRequests] = useState(false);

    const processMembers = (members) => {
        if (members === undefined) return [];
        console.log(members);
        return members
            .filter((member) => member.status === "accepted" || member.status === "owner")
            .map((member) => {
            const username = member.user && member.user.username ? member.user.username : "Unknown";
            const status = member.status;
            if (username === loginData.userName && status === "owner") {
                setUserIsOwner(true);
            }
            return <li key={member.usersToGroupsId}>{username} <span
                className={styles.memberStatus}>{status === "accepted" ? "member" : "owner"}</span></li>
        })
    }

    const getPendingRequests = (members) => {
        if (members === undefined) return [];
        return members.filter((member) => member.status === "pending")
        .map((member) => {
            const username = member.user && member.user.username ? member.user.username : "Unknown";
            const userId = member.user && member.user.userId ? member.user.userId : "Unknown";
            const status = "Odottaa hyväksyntää"
            return {username, userId, status};
        })
    }

    const {token} = useLoginData();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/private/groupData/${groupId}`,
            {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setGroupData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        if (groupData) {
            setMembers(processMembers(groupData.participantRegistrations))
            setJoinRequests(getPendingRequests(groupData.participantRegistrations))
        }
    }, [groupData])


    return (
        <div className={styles.page}>
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
                </ul>
            </div>
            <hr className={styles.horizontalRuler}/>
            {userIsOwner && 
                <>
                    <div className={styles.sectioni}>
                        <h2>Ryhmän liittymispyynnöt</h2>
                        <button onClick={() => setShowResolveRequests(!showResolveRequests)}>{showResolveRequests? 'Piilota' : 'Näytä' }</button>
                    </div>
               {showResolveRequests && <ResolveRequests group_id={groupId} pendingRequests={joinRequests} setResolved={setResolved}/>}
                <hr className={styles.horizontalRuler}/>
                </>}
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
                <button onClick={() => setShowEvents(!showEvents)}>{!showEvents?'Näytä':'Piilota'}</button>
            </div>
            {showEvents && <ViewGroupEvents group_id = {groupId} isOwner={userIsOwner}/>}
            <hr className={styles.horizontalRuler}/>

        </div>
    );
}

export default GroupPage;
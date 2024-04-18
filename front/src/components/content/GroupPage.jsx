import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./css/GroupPage.module.css";
import {useLoginData} from "@context/useLoginData.jsx";
import ViewGroupEvents from './ViewGroupEvents';
import { useNavigate } from "react-router-dom";

const GroupPage = () => {
    const [groupData, setGroupData] = useState(null);
    const [members, setMembers] = useState();
    const {groupId} = useParams();
    const [showEvents, setShowEvents] = useState(false);
    const loginData = useLoginData();
    const [userIsOwner, setUserIsOwner] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const creds = useLoginData();

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

    const {token} = useLoginData();
    useEffect(() => {
        console.log(groupId)
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

        }
    }, [groupData])
    const [deleteGroupStatus, setDeleteGroupStatus] = useState({note: '', success: null, msg: ''})
    const navigate=useNavigate()
    const handleDeleteGroup = (ev) => {
    
    setDeleteGroupStatus({note: '\'poista ryhmä\'-viesti', success: null, msg: 'lähetetty'})
    ev.preventDefault()
    axios({
        url: `${import.meta.env.VITE_BACKEND_URL}/group/private/deleteGroup/${groupId}`,
        method: 'delete',
        withCredentials: true,
        headers: {
                allow: 'application/json',
                "Authorization": `Bearer ${loginData.token}`
        }
    }).then(function (response) {
        setDeleteGroupStatus({success: true, msg: 'Ryhmän poistaminen onnistui'})
        navigate(-1);
    }).catch(function (err ) {

        if(err.message=="Network Error") {
            console.log('haloo')
            console.log(err.status)
            console.log(err)
            setDeleteGroupStatus({note: '\'poista ryhmä\'-viesti', success: false, msg: 'Ei yhteyttä tietokantaan'})
        } else {
            console.log(err)
            console.log(err.status)
            console.log(err.message)
            setDeleteGroupStatus({note: '\'poista ryhmä\'-viesti', success: false, msg: 'tunnistamaton virhe'})
        }

    })

}



    return (
        <div className={styles.page}>
            <div className={styles.sectioni}>
            <h1 className={styles.title}>Ryhmän <span>{groupData?.groupName}</span> -sivu</h1>
            {userIsOwner &&  <button onClick={handleDeleteGroup}>Poista ryhmä</button>}
            </div>
            
            <p className={styles.description}>{groupData?.groupDescription}</p>
            <div className={styles.infoText}><p>{deleteGroupStatus.msg}</p></div>
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
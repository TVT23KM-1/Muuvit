//import styles from './css/AllGroupsList.module.css';
//import React from 'react';
import axios from 'axios';
import '../index.css';
import React, {useEffect, useState} from 'react';


const AllGroupsList = ({showAllGroups, setShowAllGroups}) => {
    const [showGroupsForm, setShowGroupsForm] = useState(false);
    //const [groups, setGroups] = useState([]);
    const [ nappiaPainettu, setNappiaPainettu ]  = useState(false)
    const [ nappiaPainettuTaas, setNappiaPainettuTaas ]  = useState(false)

    useEffect(() => {
        if (nappiaPainettu || setShowGroupsForm(true)) {
            console.log('nappiaPainettu')
            setShowGroupsForm(true);
            setShowAllGroups(false);
            getAllGroups()
        }
    }, [nappiaPainettu])

    useEffect(() => {
        if (nappiaPainettuTaas || setShowGroupsForm(false)) {
            console.log('nappiaTaasPainettu')
            setShowGroupsForm(false);
            setShowAllGroups(true);
        }
    }, [nappiaPainettuTaas])

    const getAllGroups = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/groupslist`)
        .then((response) => {
            //setGroups(response.data);
            //console.log('getAllGroups')
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            {!showGroupsForm ? (
                <>
                    <div id="buttons">
                        <button className="button" onClick={() => setNappiaPainettu(!nappiaPainettu)}>Hae kaikki ryhmät</button>
                    </div>
                </>
            ) : (
                <div>
                    <div id="buttons">
                        <button className="button" onClick={() => setNappiaPainettuTaas(!nappiaPainettuTaas)}>Palaa takaisin</button>
                    </div>
                    {/*<div id="buttons">*/}
                    {/*    <button className="button" onClick={closeGroupsForm}>Hae kaikki ryhmät</button>*/}
                    {/*</div>*/}
                    {/*tahan tulostetaan luettelo ryhmista/10kpl per sivu?   */}
                    {/* {groups.map((group) => {
                    //     return (
                    //         <>
                    //             <h4>group.name</h4>
                    //             <p>group.description</p>
                    //         </>
                    //     )
                    // })} */}
                    <h2>Entapa tama?</h2>
                </div>
            )}
        </>
    )
}

export default AllGroupsList;

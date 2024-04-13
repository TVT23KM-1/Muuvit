import React from 'react'
import Groups from '@content/Groups';
import Reviews from '@content/Reviews';
import CreateGroups from "@content/CreateGroups.jsx";
import {useNavigate} from "react-router-dom";

const Community = () => {
    const navigate = useNavigate();
    return (
        <div className="page">
            <h2>Yhteisö</h2>
            {<span onClick={(ev) => navigate("/groups/create")}>Groups</span>}
            {<Reviews/>}
        </div>
    );
};

export default Community;
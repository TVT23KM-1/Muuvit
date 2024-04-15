import {useParams} from 'react-router-dom';
const GroupPage = () => {
    const {groupId} = useParams();
    return <>{groupId}</>
}

export default GroupPage;
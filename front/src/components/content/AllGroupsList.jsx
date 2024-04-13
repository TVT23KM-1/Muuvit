import '../../index.css';
import PaginatedAllGroups from "@content/PaginatedAllGroups.jsx";


const AllGroupsList = ({showAllGroups, setShowAllGroups}) => {

    return (
        <div>
            {showAllGroups && <PaginatedAllGroups />}
        </div>
    )
}

export default AllGroupsList;

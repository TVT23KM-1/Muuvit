import PaginatorNavigateMenu from "@content/Movies/PaginatorNavigateMenu.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import GroupResult from "@content/GroupResult.jsx";
import styles from './css/PaginatedAllGroups.module.css';

const PaginatedAllGroups = ({onError}) => {

    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const [pageData, setPageData] = useState([]);

    const ref = useRef(null);


    useEffect(() => {
        getData(page).then((data) => {
            setNumPages(data.numPages);
            setPageData(processPageData(data.groups));
        }).catch((error) => {
            console.error(error);
            onError(error);
        })
    }, [])

    useEffect(() => {
        getData(page).then((data) => {
            setPageData(processPageData(data.groups));
            ref.current.scrollIntoView()
        }).catch((error) => {
            console.error(error);
            onError(error);
        })
    }, [page])

    const getData = async (page) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/group/groupslist/${page}`)
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    const processPageData = (groupsData) => {
        return groupsData.map((group) => {
            console.log(group);
            return (<GroupResult
                key={group.groupId}
                name={group.groupName}
                description={group.groupDescription}
                memberCount={group.participantRegistrations.length}/>)
        })
    }

    return (
        <>
            <div className={styles.centerPaginator} ref={ref}>
                <PaginatorNavigateMenu currentPage={page} totalPages={numPages} onPageChange={setPage}/>
            </div>
            <div className={styles.pageDataContainer}>
                {pageData}
            </div>
            <div className={styles.centerPaginator}>
                <PaginatorNavigateMenu currentPage={page} totalPages={numPages} onPageChange={setPage}/>
            </div>
        </>
    )
}

export default PaginatedAllGroups;
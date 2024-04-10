import styles from '@pages/css/GroupsPage.module.css';
import '../index.css'
import React from "react";
//import PaginatorNavigateMenu from "@content/Movies/PaginatorNavigateMenu.jsx";

const GroupsPage = () => {

    const getAllGroups = () => {
        console.log('getAllGroups');
    }

    const getOwnGroups = () => {
        console.log('getOwnGroups');
    }

    return (
        <div className={styles.notice}>
            <h2>Ryhmät</h2>
            {/*<div className={styles.}>*/}
            {/*    <PaginatorNavigateMenu currentPage={page} totalPages={10} onPageChange={setPage}/>*/}
            {/*    /!*{searchData}*!/*/}
            {/*    <PaginatorNavigateMenu currentPage={page} totalPages={10} onPageChange={setPage}/>*/}
            {/*</div>*/}

            <div id="buttons">
                <button className="button" onClick={getAllGroups}>Luo uusi ryhmä</button>
            </div>
            <div id="buttons">
                <button className="button" onClick={getOwnGroups}>Luo uusi ryhmä</button>
            </div>
            {/*<div id="group-status">*/}
            {/*    <p>{groupStatus.msg}</p>*/}
            {/*</div>*/}
        </div>
    )
}

export default GroupsPage;
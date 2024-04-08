import React from "react";

import styles from "./css/PaginatorNavigateMenu.module.css";


const PaginatorNavigateMenu = ({currentPage, totalPages, onPageChange}) => {

    const nextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }
    const previousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }
    const firstPage = () => {
        onPageChange(1);
    }
    const lastPage = () => {
        onPageChange(totalPages);
    }

    let directLinks = [];
    for (let i = currentPage - 3; i <= Math.min(totalPages, currentPage + 3); i++) {
        if (i > 0) {
            let val = i === currentPage ? <span className={styles.selectedPageNumber}>{i}</span> : <a key={i} href="#" onClick={() => onPageChange(i)}>{i}</a>;
            directLinks.push(
                val
            );
        }
    }
    return (
        <div className={styles.container}>
            <a href="#" onClick={firstPage}>First page</a>
            <a href="#" onClick={previousPage}>Previous page</a>
            <span className={styles.pageNumbers}>{currentPage < 5 ? "" : "..."}{directLinks}{currentPage >= totalPages - 5 ? "" : "..."}</span>
            <a href="#" onClick={nextPage}>Next page</a>
            <a href="#" onClick={lastPage}>Last page ({totalPages})</a>
        </div>
    )
}

export default PaginatorNavigateMenu;
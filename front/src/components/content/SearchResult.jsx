import styles from "./css/SearchResult.module.css";
import React from "react";


/**
 * This component works properly within a div with the following css:
 *
 * .className {
 *     display: flex;
 *     flex-wrap: wrap;
 *     margin: var(--general-margin) auto;
 *     width: 100%;
 * }
 *
 * @param title
 * @param description
 * @param published
 * @param tmdb_score
 * @param image
 * @param key
 * @returns {Element}
 * @constructor
 */
const SearchResult = ({ title, description, published, tmdb_score, image, id, handleAddFavourites }) => {
    return (
        <div className={styles.searchEntry}>
            <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={`Kansikuva teokselle ${title}`}
                 className={styles.searchImage}/>
            <div className={styles.cardButtons}>
                <button onClick={() => handleAddFavourites(id, title)} className={styles.cardButton}>Lisää suosikkeihin</button>
                <button className={styles.cardButton}>Lisää ryhmään</button>
                <button className={styles.cardButton}>Lisää arvostelu</button>
            </div>
            <h3 className={styles.searchTitle}>{title}</h3>
            <p className={styles.searchDescription}>{description}</p>
            {published && <p className={styles.searchPublished}>Julkaistu: {published}</p>}
            <p className={styles.searchRating}>TMDB pisteet: <span>{tmdb_score}</span>
            </p>
        </div>
    );
}

export default SearchResult;
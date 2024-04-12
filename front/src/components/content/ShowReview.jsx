/**
 * Show specific review
 */

import styles from './css/ShowReview.module.css';
import axios from "axios";
import {useEffect, useState} from "react";

/**
 *
 * @param review Contains properties listed in the db model.
 * @returns {JSX.Element}
 * @constructor
 */
const ShowReview = ({review}) => {
    const [movieData, setMovieData] = useState(null);
    const [serieData, setSerieData] = useState(null);

    const getStars = (stars) => {
        let star = '';
        for (let i = 0; i < stars; i++) {
            star += '⭐';
        }
        return star;
    }

    const getDetails = (id, type) => {
        if (type === "movie") {
                return getMovieDetails(id);
        } else {
            return getSerieDetails(id);
        }
    }

    useEffect(() => {
        let data = getDetails(review.movieId, review.type);
        if (review.type === 'movie') {
            setMovieData(data);
        } else {
            setSerieData(data);
        }
    }, []);

    const getMovieDetails = (id) => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/movie/fetchMovieDetails/${id}`)
            .then(response => {
                setMovieData(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const getSerieDetails = (id) => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/show/fetchSerieDetails/${id}`)
            .then(response => {
                setSerieData(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <div className={styles.reviewContainer}>
            <p className={styles.reviewField}><strong>Käyttäjältä:</strong> <i>{review.owner.username}</i></p>
            <p className={styles.reviewField}><strong>Kohde: </strong> {review.type === "movie" ? movieData?.title : serieData?.name} <br/></p>
            <p className={styles.reviewField}><strong>Arvio:</strong> {getStars(review.stars)}</p>
            <p className={styles.reviewField}><strong>Tyyppi:</strong> {review.type === "movie" ? "elokuva" : "TV-sarja"}</p>
            <p className={`${styles.reviewField} ${styles.lastReviewField}`}><strong>Arvostelu:</strong> {review.description}</p>
        </div>
    )
}

export default ShowReview;
import React, {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import styles from './css/Movies.module.css';
import '../../index.css';
import SearchMoviesForm from "@content/Movies/SearchMoviesForm.jsx";

const Movies = ({year, language}) => {

    // queryString and setQueryString are passed further down to SearchMoviesForm.jsx
    const [queryString, setQueryString] = useState('');
    // genre and setGenre are passed further down to SearchMoviesForm.jsx
    const [genre, setGenre] = useState("");
    const [disableGenres, setDisableGenres] = useState(false);
    const [searchData, setSearchData] = useState([]);

    const search = async (page) => {
        const q = queryString ? `&query=${queryString}` : '';
        const g = genre ? `&genre=${genre}` : '';
        const p = page ? `&page=${page}` : '';
        const y = year ? `&year=${year}` : '';
        const l = language ? `&language=${language}` : 'fi-FI';
        const url = `${import.meta.env.VITE_BACKEND_URL}/movie/search?${q}${g}${p}${y}${l}`;
        console.log("URL:", url);
        let response = await axios.get(url);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Error fetching data');
        }
    }

    useEffect(() => {
            setDisableGenres(queryString && genre)
            search().then(response => {
                setSearchData(response.results.map((item, index) => {
                    return (
                        <div key={item.id} className={styles.searchEntry}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}
                                 className={styles.searchImage}/>
                            <h3 className={styles.searchTitle}>{item.title}</h3>
                            <p className={styles.searchDescription}>{item.overview}</p>
                            <p className={styles.searchRating}>TMDB pisteet: <span>{item.vote_average}</span>
                            </p>
                        </div>
                    );
                }));
            }).catch(error => {
                console.error(error);
            });
        }, [queryString, genre]
    );


    return (
        <>
            <SearchMoviesForm
                queryString={queryString} queryStringSetter={setQueryString}
                genre={genre} setGenre={setGenre}
                disableGenres={disableGenres}
            />
            <div className={styles.searchResults}>
                {searchData}
            </div>
        </>
    );
};

export default Movies;

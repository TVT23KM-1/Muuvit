import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";

import styles from './css/SearchMoviesForm.module.css';


const SearchMoviesForm = ({queryString, queryStringSetter, genre, setGenre}) => {

    const [genres, setGenres] = useState({});

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/movie/genres`)
            .then(response => {
                setGenres(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleChange = (event) => {
        queryStringSetter(event.target.value);
    }

    const handleSelectChange = (event) => {
        setGenre(event.target.value ? genres[event.target.value] : null);
        console.log(genre)
    }


    return (
        <form className={styles.form}>
            <input type="text" placeholder="Etsi elokuvia" value={queryString} onChange={handleChange} className={styles.input} />
            <select className={styles.select} onChange={handleSelectChange}>
                <option value={null} className={styles.option}>Kaikki</option>
                {Object.keys(genres).sort((a, b) => {return a<b ? -1 : 1}).map(
                    (genre, index) => {
                        return <option value={genre} key={genre} className={styles.option}>{genre}</option>
                    })
                }
            </select>
        </form>
    );
}

export default SearchMoviesForm;
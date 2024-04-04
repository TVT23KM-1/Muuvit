import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";

import styles from './css/SearchMoviesForm.module.css';
import '../../../index.css';


const SearchMoviesForm = ({queryString, queryStringSetter, genre, setGenre, disableGenres}) => {

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
        setGenre(event.target.value ? Object.entries(genres).filter(
            ([key, value]) => key === event.target.value
        )[0][0] : "");
    }


    return (
        <form className={styles.form}>
            <input type="text" placeholder="Etsi elokuvia" value={queryString} onChange={handleChange} className={styles.input} />
            <select className={styles.select} onChange={handleSelectChange} disabled={disableGenres}>
                <option value={""} className={styles.option}>--</option>
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
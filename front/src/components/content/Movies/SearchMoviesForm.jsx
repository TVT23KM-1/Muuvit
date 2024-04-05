import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";

import styles from './css/SearchMoviesForm.module.css';
import '../../../index.css';


const SearchMoviesForm = ({queryString, setQueryString,
                            genre, setGenre, disableGenres,
                            year, setYear, disableYear}
) => {

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
        setQueryString(event.target.value);
    }

    const handleSelectChange = (event) => {
        setGenre(event.target.value ? Object.entries(genres).filter(
            ([key, value]) => key === event.target.value
        )[0][0] : "");
    }

    const handleChangeYear = (event) => {
        setYear(event.target.value);
    }

    return (
        <form className={styles.form}>
            <input type="text"
                   placeholder="Etsi elokuvia"
                   value={queryString}
                   onChange={handleChange}
                   className={styles.input} />
            <input type="number"
                   min={1895}
                   max={(new Date()).getFullYear()}
                   placeholder="Ensisijainen julkaisuvuosi"
                   value={year}
                   onChange={handleChangeYear}
                   className={styles.input}
                   disabled={disableYear} />
            <input type="button" value={"Nollaa hakuvuosi"} onClick={() => setYear("")} className={styles.button} />
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
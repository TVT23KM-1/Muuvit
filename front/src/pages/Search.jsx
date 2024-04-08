import React from 'react';
import Movies from '@pages/Movies.jsx';
import Shows from '@content/Shows';
import styles from './css/Search.module.css';

const Search = () => {

    return (
        <div className="page">
            <Shows/>
            <Movies/>
        </div>
    );
};

export default Search;
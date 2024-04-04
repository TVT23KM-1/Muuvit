import React from 'react';
import Movies from '@content/Movies';
import Shows from '@content/Shows';
import styles from './Search.module.css';

const Search = () => {

    return (
        <div className="page">
            <Shows/>
            <Movies searchString={"The Mask"} language={"en"}/>
        </div>
    );
};

export default Search;
import React from 'react';
import Movies from '@content/Movies';
import Shows from '@content/Shows';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <Movies />
      <Shows/>
    </div>
  );
};

export default Search;
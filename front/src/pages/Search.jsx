import React from 'react';
import Movies from '@content/Movies';
import Shows from '@content/Shows';

const Search = () => {
  return (
    <div className="page">
      <Movies />
      <Shows />
    </div>
  );
};

export default Search;
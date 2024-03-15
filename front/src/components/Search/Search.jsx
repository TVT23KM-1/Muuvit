import React from 'react';
import Shows from '../Shows/Shows';

const Search = () => {
  return (
    <div className="page">
      <h2>Muuvihaku</h2>

      <p>Hakukomponentissa tulee olla suodattimia vähintään kolme. Hakuominaisuudella voi hakea elokuvia ja sarjoja. </p>

      {<Shows />}

    </div>
    
  );
};

export default Search;
import React from 'react'
import Groups from '@content/Groups';
import Reviews from '@content/Reviews';

const Community = () => {
  return (
  <div className="page">
      <h2>Yhteisö</h2>
        <p>Yhteisö-sivun alla arvostelut ja ryhmät.</p>

          {<Groups />}
          {<Reviews />}

  </div>

  );
};

export default Community;
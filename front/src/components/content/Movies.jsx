import React from 'react';

const Movies = () => {

    const search = () => {
        // logiikka
        alert('click');
      }    

  return (

    <>

    <h2>Muuvihaku</h2>


    Hae elokuvaa tai sarjaa: <input className="field" type="text" placeholder="..." /> <br/>
    + hakuehdot yms. <br/>
    
    <button onClick={search}>Hae</button> 

    </>


  );
};

export default Movies;

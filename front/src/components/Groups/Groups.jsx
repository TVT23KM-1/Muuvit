import React from 'react'

const Groups = () => {
  return (

    <div>
      <h2>Ryhmät</h2>

      <p>
      Kaikki käyttäjät pääsevät selaamaan ryhmiä. <br/>
      Kirjautunut käyttäjä: voi luoda uusia ryhmä "Luo ryhmä". </p>

      Kirjautunut käyttäjä pääsee ryhmän sivun kautta hallinnoimaan ryhmää olemassa olevilla oikeuksilla (vrt. ryhmän jäsen tai omistaja).<br/>
      Tämä käsittää mm. ryhmän nimen ja kuvauksen muokkaaminen (owner), ryhmästä poistuminen (member) ja ryhmän poistaminen (owner).
    </div>

  );
};

export default Groups;
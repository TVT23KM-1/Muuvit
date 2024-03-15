import React from 'react'

const Reviews = () => {
  return (

    <div>
        <h2>Arvostelut</h2>

        Kaikki: Pääsee selaamaan arvosteluja. <br/>
        Kirjautunut käyttäjä: voi tehdä arvosteluja, "uusi arvostelu" <br/><br/>

        Arvosteluissa näytetään: tähdet, lyhyt arvosteluteksti, arvostelijan nimimerkki ja laajennettava kuvaus elokuvasta/sarjasta. <br/>
        Ryhmät löytyvät listana ja kaikki voivat nähdä ryhmän nimen ja kuvauksen. <br/>
        Vain kirjautuneet käyttäjät voivat liittyä ryhmiin. <br/>
        Vain ryhmään liittynyt jäsen voi nähdä ryhmän sivun muun sisällön, esim. Chatin. <br/>

    </div>

  );
};

export default Reviews;
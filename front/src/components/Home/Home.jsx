import React from 'react'

const Home = () => {
  return (

    <div className="page">
      <h2>Tervetuloa Muuvi -palveluun! </h2>

      <p>
        Muuvi on OAMK tietotekniikan opiskelijoiden tekemä elokuvasovellusprojekti. Tarkoituksena on luoda leffaharrastajille sivusto. <br/>
        Sovellus hyödyntää avoimen datan lähteitä ja sille tehdään oma palvelin ja tietokanta datan hallintaan. <br/>
      </p>

      <h1>Kuvaus lyhyesti</h1>

      <p>Hox. Muistettava sijoittaa kaikki sisältö omiksi komponenteiksi ja reititys niihin.</p>

      <h2>Muuvihaku</h2>

      <p>Elokuva- ja sarjahaku suodattimilla sekä näytösaikojen haku elokuvateattereittain (Finnkino). </p>
      <p>Kirjautunut käyttäjä voi lisätä hakemiaan leffoja suosikkilistalleen. </p>
      <p>Sekä pystyy lähettämään niitä sekä näytösaikoja valitsemaansa ryhmään, jonka jäsen tai omistaja on.</p>

      <h2>Yhteisö</h2>

        <p>Arvostelut ja ryhmät. </p>

        <p>Kaikki käyttäjät pääsevät selaamaan arvosteluita ja ryhmiä. <br/>
        Kirjautunut käyttäjä voi luoda uusia ryhmiä ja kirjoittaa arvosteluita. </p>
       
        <p>Arvosteluissa halutaan näyttää: tähdet, lyhyt arvosteluteksti, arvostelijan nimimerkki ja laajennettava kuvaus elokuvasta/sarjasta. </p>
        
        <p>Ryhmät löytyvät listana, mutta vain kirjautuneet käyttäjät voivat liittyä ryhmiin ja liityttyään pääsee ryhmän sivulle. </p>

      <h2>Kirjautuminen</h2>

      <p>
        Kirjautumisen alla rekisteröidy ja kirjaudu sisään. <br/>
        Onnistuneen kirjautumisen jälkeen voisi kirjautuminen -linkin korvata: <br/>
        Oma tili + Kirjaudu ulos<br/>
      </p>


      <h2>Lisäominaisuudet</h2>

      <p>Millaisia lisäominaisuuksia halutaan tehdä?</p>

      <p>Ainakin käyttäjän oikeudet, onko admin vai peruskäyttäjä? <br/>
      Admin voisi olla kykenevä puuttumaan ja rajoittamaan esim. asiattomia arvosteluja sivustolla. </p>

      <p>Yksi ajatus voisi olla Chat ryhmän sivulle.</p>

    </div>

  );
};

export default Home;
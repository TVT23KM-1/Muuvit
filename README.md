# OAMK Tietotekniikan opiskelijoiden web-ohjelmoinnin sovellusprojekti keväällä 2024.

## Muuvi-projekti

Muuvi-projekti on Oulun ammattikorkeakoulun tieto- ja viestintätekniikan opiskelijoiden toisen opiskeluvuoden alkupuoliskolla toteuttama harjoitteluprojekti.
Projektissa opiskeltiin fullstack-ohjelmiston kehittämistä siten, että toteutettavina osina olivat tietokanta, backend ja frontend. Projektiryhmän opiskelijoiden kesken sovittiin jokaiselle opiskelijalle omat toteutettavat kokonaisuudet siten, että jokainen osastoteutus sisälsi kaikki kolme fullstack osiota.

## Mistä projektissa on kyse

Projektissä työstämme prototyyppi muotoista web-sovellusta elokuvaharrastajille. Sovelluksen tarkoituksena on tarjota käyttäjille mahdollisuus hakea elokuvia sekä elokuvateattereiden näytösaikoja. Käyttäjät voivat luoda itselleen suosikkilistan elokuvista ja sarjoista, ja jakaa sen halutessaan muiden käyttäjien kanssa. Lisäksi sivustolla on mahdollisuus luoda omia ryhmiä, joiden sivuja pystyy kustomoimaan ja täydentämään haluamillaan elokuvilla ja näytösajoilla.

Projektin tarkoitus oppimisen näkökulmasta on harjoitella web-ohjelmoinnin perusteita full-stack kehityksessä ja soveltaa niitä käytännön projektissa. Tavoitteena on oppia suunnittelemaan ja toteuttamaan vaatimusmäärittelyn mukainen web-sovellus käytettävissä olevan ajan puitteissa, käyttämään erilaisia teknologioita ja työkaluja, sekä kehittää yhteistyö- ja projektinhallintataitoja ryhmätyössä.

## Projektiryhmä

- Juho Hietala, projektipäällikkö, ohjelmistokehittäjä
- Mikko Kujala, scrum master, ohjelmistokehittäjä
- Janne Paaso, ohjelmistokehittäjä
- Tauno Jokinen, ohjelmistokehittäjä

## Keskeiset teknologiat

**Projekti toteutettiin käyttäen seuraavia teknologioita:**

- Kehitysympäristöt: IntelliJ IDEA, WebStorm  ja Visual Studio Code
- Frontend: React, jsx, css
- Backend: Java, Spring Boot, PostgreSQL
- Palvelimen build järjestelmä: Maven
- Kirjastot: axios, react, Mocha, Chai, Java Springboot kirjastot
- Tietokanta: PostgreSQL
- Container ohjelmisto: Docker
- Versionhallinta: Git

## Sovelluksen arkkitehtuuri

Sovelluksen full-stack arkkitehtuuri perustuu aiemmin kuvailtuihin teknologioihin: React, Java Springboot, Postgres ja ORM(Object-Relational Mapping).

React sovellus tekee pyyntöjä Finnkino API:in sekä Java Springboot palvelimelle HTTP rajapinnan yli. Palvelin on yhteydessä julkisii rajapintoihin, joihin tarvitaan API avain, sekä Postgres tietokantaan Render.com palvelussa. Palvelinohjelmisto käsittelee tietokantadataa ORM mallinnuksen avulla. Palvelimen tarkoitus on myös mahdollistaa siisti ja selkeä frontend koodi yhdistelemällä eri toimintoja kuten tietokantadatan ja julkisten rajapintojen välisiä yhteyksiä esimerkiksi elokuvadata noutamisessa.

Sovelluksen eri toiminnot kuten käyttäjän luominen, kirjautuminen sekä elokuvien hakeminen on palvelimella jaettu omiin palvelukejuihin. Palvelimelle määritetyt REST controllerit palvelevat endpointeja, joita voidaan kutsua React sovelluksesta. Controllerit käyttävät saman nimisiä Service luokkia bisneslogiikan toteuttamiseen. Service luokat puolestaan hyödyntävät Repository luokkia, jotka käsittelevät Model luokkien ORM mallinnettua tietokantadataa.

**Tietokannan rakenne käy ilmi alla olevasta ER-kaaviosta:**

![ER-kaavio](./Suunnitelmat/ER-kaavio.png)

## Koodin toteutus ja nimeämiskäytännöt

Projektissa on pyritty sekä frontend- että backend-puolella koodin modulaarisuuteen. Riippuen toiminnon laajuudesta ja muista tekijöistä, olemme jakaneet React-koodin toiminnallisuudet omiin komponentteihin erillisiin tiedostoihin. Nämä komponentit sisältävät usein toisia komponentteja, mikä helpottaa koodin ymmärtämistä ja ylläpitämistä. Palvelinpuolella eri toiminnallisuudet on jaettu omiin Java-luokkiin erillisiin tiedostoihin.

Jokainen React-komponentti on pyritty nimeämään kuvaavasti sen toiminnallisuuden mukaan. Samoin palvelimen controllerit, servicet, repositoryt ja modelit noudattavat samaa periaatetta.

## Käyttöönotto

**Ohjeet sovelluksen käynnistämiseksi paikallisesti**

Projektin ohjelmakoodit löytyvät githubin pääkansioista backend ja front. Postgres tietokannan er-kuvaus löytyy suunnitelmat kansiosta, jossa on myös database.sql-tiedosto. Ohjelmistoa varten tarvitaan tietokanta, jonka voi luoda joko paikallisesti tai johonkin pilvipalveluun. Tämän jälkeen database.sql tiedosto tulee ajaa tietokantaan. Ennen ohjelman käynnistämistä backend kansioon tulee lisätä .env tiedosto, jonka luomista varten backend kansion juuressa on esimerkkitiedosto example.env, joka sisältää mallin .env tiedoston luomista varten. Esimerkistä selviää mm. mitä tietokantayhteyteen tarvittavia muuttujia tulee määritellä. Tänne tulee lisätä myös itse hankittu API avain TMDB palveluun.
React sovelluksen .env tiedostoon tulee laittaa palvelimen osoite. Kun ympäristömuuttujat on lisätty, voi sekä frontend- että backend ohjelmiston käynnistää. Palvelinta voi ajaa paikallisesti esimerkiksi käynnistämällä sen VSCodessa tai muussa vastaavassa editorissa. Frontend React sovelluksen voi käynnistää paikallisesti komentoriviltä komennolla *npm run dev*. 

## Linkki palvelimelle, jossa sovellus ajossa (jos webbisovellus)  --  Janne Paaso

Projetia ei vielä ole palvelimella

## Sovelluksen esittely kuvin + tekstein tai videolla  --  Tauno Jokinen

Videon tekeminen projektin tässä vaiheessa ei vielä mahdollista

# OAMK Tietotekniikan opiskelijoiden web-ohjelmoinnin sovellusprojekti keväällä 2024.

## Mistä projektissa on kyse

Projekti "Muuvit" on OAMK Tietotekniikan opiskelijoiden web-ohjelmoinnin sovellusprojekti keväällä 2024. Ryhmässämme, johon kuuluu neljä opiskelijaa, työstämme web-sovellusta elokuvaharrastajille. Sovelluksen tarkoituksena on tarjota käyttäjille mahdollisuus hakea elokuvia sekä elokuvateattereiden näytösaikoja. Käyttäjät voivat luoda itselleen suosikkilistan elokuvista ja sarjoista, ja jakaa sen halutessaan muiden käyttäjien kanssa. Lisäksi sivustolla on mahdollisuus luoda omia ryhmiä, joiden sivuja pystyy kustomoimaan ja täydentämään haluamillaan elokuvilla ja näytösajoilla.

Projektin tarkoitus oppimisen näkökulmasta on harjoitella web-ohjelmoinnin perusteita full-stack kehityksessä ja soveltaa niitä käytännön projektissa. Tavoitteena on oppia suunnittelemaan ja toteuttamaan toimiva web-sovellus, käyttämään erilaisia teknologioita ja työkaluja, sekä kehittää yhteistyö- ja projektinhallintataitoja ryhmätyössä.

## Muuvi-projekti

Muuvi-projekti on Oulun ammattikorkeakoulun tieto- ja viestintätekniikan opiskelijoiden toisen opiskeluvuoden alkupuoliskolla toteuttama harjoitteluprojekti.
Projektissa opiskeltiin fullstack-ohjelmiston kehittämistä siten, että toteutettavina osina olivat tietokanta, backend ja frontend. Projektiryhmän opiskelijoiden kesken sovittiin jokaiselle opiskelijalle omat toteutettavat kokonaisuudet siten, että jokainen osastoteutus sisälsi kaikki kolme fullstack osiota.

## Projektiryhmä

- Juho Hietala, projektipäällikkö, ohjelmistokehittäjä
- Mikko Kujala, scrum master, ohjelmistokehittäjä
- Janne Paaso, ohjelmistokehittäjä
- Tauno Jokinen, ohjelmistokehittäjä

## Keskeiset teknologiat

Projekti toteutettiin käyttäen seuraavia teknologioita: 
- IDE: IntelliJ IDEA, WebStorm  ja Visual Studio Code
- Frontend: React, jsx, css
- Backend: Java, Spring Boot, PostgreSQL
- Project build system: Maven
- Libraries: axios, react, Mocha, Chai
- Database: PostgreSQL
- Database container: Docker
- Version control: Git

## Sovelluksen arkkitehtuuri

Sovelluksen full-stack arkkitehtuuri perustuu aiemmin kuvailtuihin teknologioihin: React, Java Springboot, Postgres ja ORM(Object-Relational Mapping).

React sovellus tekee pyyntöjä Finnkino API:in sekä Java Springboot palvelimelle HTTP rajapinnan yli. Palvelin on yhteydessä julkisii rajapintoihin, joihin tarvitaan API avain, sekä Postgres tietokantaan Render.com palvelussa. Palvelinohjelmisto käsittelee tietokantadataa ORM mallinnuksen avulla. Palvelimen tarkoitus on myös mahdollistaa siisti ja selkeä frontend koodi yhdistelemällä eri toimintoja kuten tietokantadatan ja julkisten rajapintojen välisiä yhteyksiä esimerkiksi elokuvadatan noutamisessa.

Sovelluksen eri toiminnot kuten käyttäjän luominen, kirjautuminen sekä elokuvien hakeminen on palvelimella jaettu omiin palvelukejuihin. Palvelimelle määritetyt REST controllerit palvelevat endpointeja, joita voidaan kutsua React sovelluksesta. Controllerit käyttävät saman nimisiä Service luokkia bisneslogiikan toteuttamiseen. Service luokat puolestaan hyödyntävät Repository luokkia, jotka käsittelevät Model luokkien ORM mallinnettua tietokantadataa.

**Tietokannan rakenne käy ilmi alla olevasta ER-kaaviosta:**

![ER-kaavio](./Suunnitelmat/ER-kaavio.png)

## Koodin toteutus ja nimeämiskäytännöt

Projektissa on huolehdittu sekä frontend- että backend-puolella koodin modulaarisuudesta. Olemme pyrkineet jakamaan React-koodin toiminnallisuudet aina omiin komponentteihin erillisiin tiedostoihin. Nämä komponentit sisältävät usein toisia komponentteja, mikä helpottaa koodin ymmärtämistä ja ylläpitämistä. Palvelinpuolella eri toiminnallisuudet on jaettu omiin Java-luokkiin erillisiin tiedostoihin.

Jokainen React-komponentti on nimetty selkeästi ja kuvaavasti sen toiminnallisuuden mukaan, mikä myös helpottaa koodin ymmärtämistä ja ylläpitämistä. Samoin palvelimen controllerit, servicet, repositoryt ja modelit noudattavat samaa periaatetta. Ne on nimetty niiden palveleman kokonaisuuden mukaan, mikä tekee koodista helposti hahmotettavaa ja navigoitavaa.

## Käyttöönotto

Projektin ohjelmakoodit löytyvät githubin pääkansioista backend ja front. Postgres tietokannan er-kuvaus löytyy suunnitelmat kansiosta, jossa on myös database.sql-tiedosto. Ennen ohjelman käynnistämistä backend kansioon tulee lisätä .env tiedosto, jonka luomista varten backend kansion juuressa on esimerkkitiedosto example.env, joka sisältää mallin .env tiedoston luomista varten.

## Linkki palvelimelle, jossa sovellus ajossa (jos webbisovellus)  --  Janne Paaso

Projetia ei vielä ole palvelimella

## Sovelluksen esittely kuvin + tekstein tai videolla  --  Tauno Jokinen

Videon tekeminen projektin tässä vaiheessa ei vielä mahdollista

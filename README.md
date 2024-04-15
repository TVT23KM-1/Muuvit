# OAMK Tietotekniikan opiskelijoiden web-ohjelmoinnin sovellusprojekti keväällä 2024.

## Kuvaus mistä projektissa on kyse  --  Juho Hietala

Projektimme "Muuvit" on OAMK Tietotekniikan opiskelijoiden web-ohjelmoinnin sovellusprojekti keväällä 2024. Ryhmässämme, johon kuuluu neljä opiskelijaa, työstämme web-sovellusta elokuvaharrastajille. Sovelluksen tarkoituksena on tarjota käyttäjille mahdollisuus hakea elokuvia sekä elokuvateattereiden näytösaikoja helposti ja kätevästi. Käyttäjät voivat luoda itselleen suosikkilistan elokuvista ja sarjoista, ja jakaa sen halutessaan muiden käyttäjien kanssa. Lisäksi sivustolla on mahdollisuus luoda omia ryhmiä, joiden sivuja pystyy kustomoimaan ja täydentämään haluamillaan elokuvilla ja näytösajoilla. "Muuvit" tarjoaa siis monipuolisen ja interaktiivisen alustan elokuvaharrastajien tarpeisiin.

Projektin tarkoitus oppimisen näkökulmasta on harjoitella web-ohjelmoinnin perusteita full-stack kehityksessä ja soveltaa niitä käytännön projektissa. Tavoitteena on oppia suunnittelemaan ja toteuttamaan toimiva web-sovellus, käyttämään erilaisia teknologioita ja työkaluja, sekä kehittää yhteistyö- ja projektinhallintataitoja ryhmätyössä.

## Millainen projekti on  --  Mikko Kujala
## Millä teknologioilla tehty  --  Janne Paaso
## Ketkä tekivät (jos ryhmätyö) ja mikä oli kenenkin rooli  --  Tauno Jokinen

## Ainakin jotain näistä: sovelluksen arkkitehtuuri, tietokantarakenne, rajapintakuvaus, käyttöliittymäsuunnitelma  --  Juho Hietala

## Sovelluksen arkkitehtuuri

Sovelluksen full-stack arkkitehtuuri perustuu aiemmin kuvailtuihin teknologioihin: React, Java Springboot, Postgres ja ORM(Object-Relational Mapping).

React sovellus tekee pyyntöjä Finnkino API:in sekä Java Springboot palvelimelle HTTP rajapinnan yli. Palvelin on yhteydessä julkisii rajapintoihin, joihin tarvitaan API avain, sekä Postgres tietokantaan Render.com palvelussa. Palvelinohjelmisto käsittelee tietokantadataa ORM mallinnuksen avulla. Palvelimen tarkoitus on myös mahdollistaa siisti ja selkeä frontend koodi yhdistelemällä eri toimintoja kuten tietokantadatan ja julkisten rajapintojen välisiä yhteyksiä esimerkiksi elokuvadata noutamisessa.

Sovelluksen eri toiminnot kuten käyttäjän luominen, kirjautuminen sekä elokuvien hakeminen on palvelimella jaettu omiin palvelukejuihin. Palvelimelle määritetyt REST controllerit palvelevat endpointeja, joita voidaan kutsua React sovelluksesta. Controllerit käyttävät saman nimisiä Service luokkia bisneslogiikan toteuttamiseen. Service luokat puolestaan hyödyntävät Repository luokkia, jotka käsittelevät Model luokkien ORM mallinnettua tietokantadataa.

**Tietokannan rakenne käy ilmi alla olevasta ER-kaaviosta:**

![ER-kaavio](./Suunnitelmat/ER-kaavio.png)

## Miten otetaan käyttöön  --  Mikko Kujala
## Linkki palvelimelle, jossa sovellus ajossa (jos webbisovellus)  --  Janne Paaso
## Sovelluksen esittely kuvin + tekstein tai videolla  --  Tauno Jokinen

## Sekä tietysti siisti kooditoteutus, yhtenäinen koodaustyyli, järkevät nimeämiset, koodin dokumentointi kommentein.  --  Juho Hietala

Projektissa on huolehdittu sekä frontend- että backend-puolella koodin modulaarisuudesta. Olemme pyrkineet jakamaan React-koodin toiminnallisuudet aina omiin komponentteihin erillisiin tiedostoihin. Nämä komponentit sisältävät usein toisia komponentteja, mikä helpottaa koodin ymmärtämistä ja ylläpitämistä. Palvelinpuolella eri toiminnallisuudet on jaettu omiin Java-luokkiin erillisiin tiedostoihin.

Jokainen React-komponentti on nimetty selkeästi ja kuvaavasti sen toiminnallisuuden mukaan, mikä myös helpottaa koodin ymmärtämistä ja ylläpitämistä. Samoin palvelimen controllerit, servicet, repositoryt ja modelit noudattavat samaa periaatetta. Ne on nimetty niiden palveleman kokonaisuuden mukaan, mikä tekee koodista helposti hahmotettavaa ja navigoitavaa.

Ryhmä 1.
- Juho Hietala
- Janne Paaso
- Tauno Jokinen
- Mikko Kujala

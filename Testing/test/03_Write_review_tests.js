let chai = require('chai');
let chaiHttp = require('chai-http');
require('dotenv').config();
chai.use(chaiHttp);





describe('POST newReview tests', () => {
    it('should return 403 status code and a message "Forbidden access!" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/review/private/newReview')
            .set({ Authorization: 'bearer '+ 'virheellinenJWT'  })
            .send({
                movieId: '744',
                type: 'movie',
                stars: '3',
                description: '"Top Gun" on klassikko, joka ei vanhene koskaan. Elokuvan vaikuttavat lentokohtaukset ja voimakas draama tekevät siitä ikuisen suosikin, joka vetoaa kaikenikäisiin katsojiin.'
            }).end((err, res) => {
                chai.expect(res).to.have.status(403);
                chai.expect(res.text).to.be.a('string').equal('Forbidden access!');
                done();
            });
    });

    it('should return 418 status code and a message "I am a teapot" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/review/private/newReview')
            .set({ Authorization: process.env.JWT  })
            .send({
                movieId: '744',
                //type: 'movie', poistetaan parametri ja saadaan virhe
                stars: '3',
                description: '"Top Gun" on klassikko, joka ei vanhene koskaan. Elokuvan vaikuttavat lentokohtaukset ja voimakas draama tekevät siitä ikuisen suosikin, joka vetoaa kaikenikäisiin katsojiin.'
            }).end((err, res) => {
                chai.expect(res).to.have.status(418);
                chai.expect(res.text).to.be.a('string').equal('I\'m a teapot');
                done();
            });
    });

    it('should return 200 status code and a message "Review luotu" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/review/private/newReview')
            .set({ Authorization: process.env.JWT })
            .send({
                movieId: '744',
                type: 'movie',
                stars: '3',
                description: '"Top Gun" on klassikko, joka ei vanhene koskaan. Elokuvan vaikuttavat lentokohtaukset ja voimakas draama tekevät siitä ikuisen suosikin, joka vetoaa kaikenikäisiin katsojiin.'
            }).end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.be.a('string').equal('Review created');
                done();
            });
    });
})
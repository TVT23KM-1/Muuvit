let chai = require('chai');
let chaiHttp = require('chai-http');
require('dotenv').config();

chai.use(chaiHttp);




describe('POST create  group tests', () => {
    it('should return 200 status code and a message "created" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/group/private/create')
            .set({ Authorization: process.env.JWT  })
            .send({
                groupName: 'Mocha testgroup6',
                description: 'Tämä on käyttäjän Tauno luoma testiryyhmä'
            }).end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.be.a('string').equal('Created');
                done();
            });
    });

    it('should return 400 status code and a message "Error creating group. Maybe it already exists?" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/group/private/create')
            .set({ Authorization: process.env.JWT  })
            .send({
                groupName: 'Mocha testgroup2',
                description: 'Tämä on käyttäjän Tauno luoma testiryyhmä'
            }).end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.expect(res.text).to.be.a('string').equal('Error creating group. Maybe it already exists?');
                done();
            });
    });

    it('should return 403 status code and a message "Forbidden access!" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/group/private/create')
            .set({ Authorization: 'berer höpöhöpö jWT'  })
            .send({
                groupName: 'Mocha testgroup2',
                description: 'Tämä on käyttäjän Tauno luoma testiryyhmä'
            }).end((err, res) => {
                chai.expect(res).to.have.status(403);
                chai.expect(res.text).to.be.a('string').equal('Forbidden access!');
                done();
            });
    });

})
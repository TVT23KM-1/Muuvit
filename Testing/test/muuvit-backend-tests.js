let chai = require('chai');
let chaiHttp = require('chai-http');
require('dotenv').config();

chai.use(chaiHttp);

describe('POST Login tests', () => {
    it('should return 200 status code', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/auth/login')
            .send({
                userName: 'Backend_test',
                password: 'Backend_test'
            }).end((err, res) => {
                chai.expect(res).to.have.status(200);
                done();
            });
    });
    it('should return a token', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/auth/login')
            .send({
                userName: 'Backend_test',
                password: 'Backend_test'
            }).end((err, res) => {
                console.log(res.data);
                chai.expect(res.text).to.be.a('string').with.lengthOf.above(25);
                done();
            });
    });
    it('should return 401 status code', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/auth/login')
            .send({
                userName: 'Backend_test',
                password: 'wrong_password'
            }).end((err, res) => {
                chai.expect(res).to.have.status(401);
                done();
            });
    });
    it('should return "User not found"', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/auth/login')
            .send({
                userName: 'wrong_user',
                password: 'Backend_test'
            }).end((err, res) => {
                chai.expect(res.text).to.be.a('string').equal('User not found');
                done();
            });
    });
    it('should return "Invalid password"', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/auth/login')
            .send({
                userName: 'Backend_test',
                password: 'wrong_password'
            }).end((err, res) => {
                chai.expect(res.text).to.be.a('string').equal('Invalid password');
                done();
            });
    });
    it('should return "Username or password missing"', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/auth/login')
            .send({
                userName: 'Backend_test'
            }).end((err, res) => {
                chai.expect(res.text).to.be.a('string').equal('Username or password missing');
                done();
            });
    });
});

module.exports = chai;
let chai = require('chai');
let chaiHttp = require('chai-http');
require('dotenv').config();

chai.use(chaiHttp);

describe('POST Create account tests', () => {
    it('should return 200 status code and a message "Account created" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .post('/user/createAccount')
            .send({
                userName: process.env.USERNAME,
                password: process.env.PASSWORD
            }).end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.be.a('string').equal('Account created');
                done();
            });
    });
});

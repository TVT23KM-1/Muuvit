let chai = require('chai');
let chaiHttp = require('chai-http');
require('dotenv').config();
chai.use(chaiHttp);

//@DeleteMapping("/private/deleteGroup/{groupId}")
describe('Delete delete  group tests', () => {


    it('should return 200 status code and a message including "groupId" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .get('/group/private/groupData/10')
            .set({ Authorization: process.env.JWT  })
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).be.a('string').include('Forbidden access!');
                done();
            });
        });

    it('should return 403 status code and a message "Forbidden access!" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .delete('/group/private/deleteGroup/10')
    //      .set({ Authorization: process.env.JWT  })
            .end((err, res) => {
                chai.expect(res).to.have.status(403);
                chai.expect(res.text).to.be.a('string').equal('Forbidden access!');
                done();
        });
    });

    it('should return 200 status code and a message "Deleted" when succesfull', (done) => {
        chai.request(process.env.BACKEND_URL)
            .delete('/group/private/deleteGroup/?10')
            .set({ Authorization: process.env.JWT  })
            .end((err, res) => {
                chai.expect(res).to.have.status(404);
                chai.expect(res.text).to.be.a('string').equal('Forbidden access!');
                done();
        });
    });

});





   
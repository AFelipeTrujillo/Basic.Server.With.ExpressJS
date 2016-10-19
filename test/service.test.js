var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;

//https://github.com/visionmedia/superagent
describe("General Testing for my application", function(){
    it("Should return a 200 status", function(done){
        superagent.get('http://localhost:5000')
        .end(function (err, res) {
            console.log(err);
            expect(res).not.to.be(null);
            expect(res.status).to.equal(200);
            done();
        });
    })
})
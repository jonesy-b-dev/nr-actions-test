const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('Node-RED Flow Tests', function () {
  it('should test the Node-RED flow', function (done) {
    // Replace this with the appropriate URL for your Node-RED instance
    const nodeRedURL = 'http://127.0.0.1:1880';

    // Replace this with the payload you want to inject in your flow
    const injectPayload = {
      // Your inject payload goes here
      msg : "Hello World"
    };

    // Send an HTTP POST request to the Node-RED inject endpoint
    chai
      .request(nodeRedURL)
      .get('/testTwo')
      //.send(injectPayload)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        const debugOutput = res.body;
        console.log(debugOutput);
        
        done();

        // Replace 'debug-node-output' with the name of your debug node
        // and 'expected-output' with the expected output you're looking for
      });
  });
});

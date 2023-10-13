// Include the required packages for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp); 
const expect = chai.expect;

// Describe the test suite
describe('Node-RED Flow Test', function () {
  // Define a test case
  it('Check if status code of 200 is recieved', function (done) {
    // Set the base URL for the request
    const nodeRedURL = 'http://127.0.0.1:1880';

    // Any body that you want to inject in the flow can go over here
    const injectPayload = {
      msg: "Hello World"
    };

    // Send an HTTP GET request to the Node-RED inject endpoint using chai
    chai
      .request(nodeRedURL)
      .get('/testTwo') 
      //.send(injectPayload) // Uncomment this line to send the injectPayload with the request
      .end(function (err, res) {
        expect(err).to.be.null; // Ensure there are no errors during the request
        expect(res).to.have.status(200); // Expect a successful HTTP response (status code 200)

        // Extract and display the response body (debug output)
        const debugOutput = res.body;
        console.log(debugOutput);

        // Indicate that the test case is finished
        done();
      });
  });
});
var request = require("request");

var base_url = "http://localhost:1337/";

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
      	expect(response.statusCode).toBe(200);

        done("done");
      });
    });
  });
});

//papusha 

describe("user test", function() {
  describe("GET /", function() {
    it("returns user count", function(done) {
      request.get(base_url+"user", function(error, response, body) {
      	
      	expect(JSON.parse(body).length).toBe(0);

        done();
      });
    });
  });
});

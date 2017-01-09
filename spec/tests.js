
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
  describe("returns user count", function() {
    it("returns user count", function(done) {
      request.get(base_url+"user", function(error, response, body) {
      	
      	expect(JSON.parse(body).length).toBe(0);

        done();
      });
    });
  });
});
//vlad kpi
describe("messages test", function() {
  describe("returns messages count", function() {
    it("msg count", function(done) {
      request.get(base_url+"/messages", function(error, response, body) {
      	
      	expect(JSON.parse(body).length).toBe(0);

        done();
      });
    });
  });
})
var mock = require('mock-require');

var request1 = {};
mock('request1', { get: function() {
  	console.log("mocked")
}}); 
request1.get = function() {
	return { response : { statusCode : 200}}
};
//mocks test front server response

describe("returns fake status server", function() {
    it("returns fake status server", function(done) {
      var c = request1.get("http://localhost:8080")
      	// console.log(c)
      	expect(c.response.statusCode).toBe(200);

        done();
      // });
    });
  });


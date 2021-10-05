const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello Universe", (done) => {
    request(app).get("/").expect("Hello Universe", done);
  })
});
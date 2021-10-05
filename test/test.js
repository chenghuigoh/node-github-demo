const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello Universe, is there anyone?", (done) => {
    request(app).get("/").expect("Hello Universe, is there anyone?", done);
  })
});
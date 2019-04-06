const request = require("supertest");
const host = process.env.HOST || "http://localhost:3000";
const expect = require("chai").expect;

describe("test lambda layers", () => {
  it("should return the right for addition operation", done => {
    request(`${host}`)
      .post("/test/addition")
      .send({ a: 3, b: 5 })
      .expect(200)
      .expect(res => {
        expect(res.body).deep.eq({ result: 8 });
      })
      .end(done);
  });

  it("should return the right result for substraction operation", done => {
    request(`${host}`)
      .post("/test/substraction")
      .send({ a: 7, b: 2 })
      .expect(200)
      .expect(res => {
        expect(res.body).deep.eq({ result: 5 });
      })
      .end(done);
  });
});

const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const expect = chai.expect;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", function () {
    this.timeout(0);

    // #1
    test("POST to /api/translate with both fields", function (done) {
        chai.request(server)
            .post("/api/translate")
            .send({ text: "favorite", locale: "american-to-british" })
            .end((req, res) => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    text: "favorite",
                    translation: '<span class="highlight">favourite</span>',
                });
                done();
            });
    });
    // #2
    test("POST to /api/translate with invalid locale field", function (done) {
        chai.request(server)
            .post("/api/translate")
            .send({ text: "favorite", locale: "invalid_locale" })
            .end((req, res) => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    error: "Invalid value for locale field",
                });
                done();
            });
    });
    // #3
    test("POST to /api/translate with missing text field", function (done) {
        chai.request(server)
            .post("/api/translate")
            .send({ locale: "american-to-british" })
            .end((req, res) => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    error: "Required field(s) missing",
                });
                done();
            });
    });
    // #4
    test("POST to /api/translate with missing locale field", function (done) {
        chai.request(server)
            .post("/api/translate")
            .send({ text: "favorite" })
            .end((req, res) => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    error: "Required field(s) missing",
                });
                done();
            });
    });
    // #5
    test("POST to /api/translate with empty text field", function (done) {
        chai.request(server)
            .post("/api/translate")
            .send({ text: "", locale: "american-to-british" })
            .end((req, res) => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    error: "No text to translate",
                });
                done();
            });
    });
    // #6
    test("POST to /api/translate with no translation needed", function (done) {
        chai.request(server)
            .post("/api/translate")
            .send({ text: "favourite", locale: "american-to-british" })
            .end((req, res) => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    text: "favourite",
                    translation: "Everything looks good to me!",
                });
                done();
            });
    });
});

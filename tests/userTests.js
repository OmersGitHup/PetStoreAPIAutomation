const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Test", function () {

    it("getuserinfo", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/alican09");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("getwronguserinfo", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/alican0");
        expect(response).to.have.status(404);
        return chakram.wait();
    });
});
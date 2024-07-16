const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Test", function () {

    it("getuserinfo", function () {

        const requestBody = {
            "id": 1231123,
            "username": "ahmet",
            "firstName": "Ahmet Can",
            "lastName": "Soy",
            "email": "alicanozsoy1134@gmail.com",
            "password": "12345667",
            "phone": "1231454534123",
            "userStatus": 0
          }
        const response = chakram.post("https://petstore.swagger.io/v2/user",requestBody);
        expect(response).to.have.status(200);

        const response2 = chakram.get("https://petstore.swagger.io/v2/user/ahmet");
        expect(response2).to.have.status(200);
        return chakram.wait();
    });

    it("getwronguserinfo", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/alican0");
        expect(response).to.have.status(404);
        return chakram.wait();
    });

    it("userCreate", function () {
        const requestBody = {
            "id": 1231123,
            "username": "ahmet",
            "firstName": "Ahmet Can",
            "lastName": "Soy",
            "email": "alicanozsoy1134@gmail.com",
            "password": "12345667",
            "phone": "1231454534123",
            "userStatus": 0
          }
        const response = chakram.post("https://petstore.swagger.io/v2/user",requestBody);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("userLogin", function () {
        const qsBody = {
            "username": "can",
            "password": "1234"
        }
        const response = chakram.get("https://petstore.swagger.io/v2/user/login",{qs:qsBody});
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("userLogout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("updateUser", function () {
        const body = {
            "id": 2,
            "username": "alican",
            "firstName": "Ali Can",
            "lastName": "Özsoy",
            "email": "alicanozsoy12@gmail.com",
            "password": "1",
            "phone": "456",
            "userStatus": 1
          }
        const response = chakram.put("https://petstore.swagger.io/v2/user/ahmet", body);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("deleteUser", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/ahmet");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("createWithList", function () {
        const body = [
            {
              "id": 1,
              "username": "ahmet",
              "firstName": "Ahmet",
              "lastName": "Öz",
              "email": "ahmet1@gmail.com",
              "password": "1234",
              "phone": "345",
              "userStatus": 0
            },
            {
              "id": 2,
              "username": "mehmet",
              "firstName": "Mehmet",
              "lastName": "Masad",
              "email": "mehmet@gmail.com",
              "password": "234",
              "phone": "123213",
              "userStatus": 0
            }
          ]
        const response = chakram.post("https://petstore.swagger.io/v2/user/createWithList", body);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("createWithArray", function () {
        const body = [
            {
              "id": 3,
              "username": "duygu",
              "firstName": "Duygu",
              "lastName": "Öz",
              "email": "duygu@gmail.com",
              "password": "3456",
              "phone": "123456",
              "userStatus": 0
            }
          ]
        const response = chakram.post("https://petstore.swagger.io/v2/user/createWithArray",body);
        expect(response).to.have.status(200);
        return chakram.wait();
    });
});
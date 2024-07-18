const chakram = require('chakram'),
    expect = chakram.expect;

describe("Pet Test", function () {

    it("/v2/pet createPet", function () {

        

        const requestBody = {
            "id": 75648362,
            "category": {
              "id": 563543,
              "name": "pet"
            },
            "name": "pamuk",
            "photoUrls": [
              "https://preview.redd.it/herkese-iyi-g%C3%BCnler-kedi-foto%C4%9Fraf%C4%B1-ister-misiniz-v0-aa9wwa3tp3ab1.jpg?width=1043&format=pjpg&auto=webp&s=212bd19543ad268d5e473e1dd1243a90b9a23a94"
            ],
            "tags": [
              {
                "id": 1,
                "name": "cat"
              }
            ],
            "status": "available"
          }
        const response = chakram.post("https://petstore.swagger.io/v2/pet",requestBody);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(requestBody);

        return chakram.wait();
    });

    it("/v2/pet getPet", function () {
        const responseBody={
            "id": 75648362,
            "category": {
              "id": 563543,
              "name": "pet"
            },
            "name": "pamuk",
            "photoUrls": [
              "https://preview.redd.it/herkese-iyi-g%C3%BCnler-kedi-foto%C4%9Fraf%C4%B1-ister-misiniz-v0-aa9wwa3tp3ab1.jpg?width=1043&format=pjpg&auto=webp&s=212bd19543ad268d5e473e1dd1243a90b9a23a94"
            ],
            "tags": [
              {
                "id": 1,
                "name": "cat"
              }
            ],
            "status": "available"
          }

        
        const response = chakram.get("https://petstore.swagger.io/v2/pet/75648362");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(responseBody);

        return chakram.wait();
    });

    it("/v2/pet deletePet", function () {
        const responseBody={
            "code": 200,
            "type": "unknown",
            "message": "75648362"
          }
        
        const response = chakram.delete("https://petstore.swagger.io/v2/pet/75648362");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(responseBody);

        return chakram.wait();

    });

    it("/v2/pet updatePet", function () {

        const requestBody = {
            "id": 75648362,
            "category": {
              "id": 563543,
              "name": "pet"
            },
            "name": "zeytin",
            "photoUrls": [
              "https://preview.redd.it/herkese-iyi-g%C3%BCnler-kedi-foto%C4%9Fraf%C4%B1-ister-misiniz-v0-aa9wwa3tp3ab1.jpg?width=1043&format=pjpg&auto=webp&s=212bd19543ad268d5e473e1dd1243a90b9a23a94"
            ],
            "tags": [
              {
                "id": 1,
                "name": "cat"
              }
            ],
            "status": "available"
          }
        const response = chakram.put("https://petstore.swagger.io/v2/pet",requestBody);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(requestBody);

        return chakram.wait();



    });



   
   
});
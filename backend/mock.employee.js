
const faker = require('faker');
let listofEmployees = [];
for(let i=0;i<10;i++)
    {
        let newEmpObj={
            Id:faker.random.number(5000),
            HrCode:faker.random.alphaNumeric(),
            FirstName :faker.name.firstName(),
            LastName:faker.name.lastName(),
            PhotoUrl: faker.image.imageUrl(),
            City: faker.address.city()
        };
        listofEmployees.push(newEmpObj);
    }


module.exports = listofEmployees;
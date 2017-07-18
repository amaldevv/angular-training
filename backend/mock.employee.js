const faker = require('faker');
let listofEmployees = [];
for(let i=0;i<10;i++)
    {
        let newEmpObj={
            Id:faker.random.number(5000),
            HrCode:faker.random.alphaNumeric(),
            FirstName :faker.name.FirstName,
            LastName:faker.name.LastName,
        };
        listofEmployees.push(newEmpObj);
    }

module.exports = listofEmployees;
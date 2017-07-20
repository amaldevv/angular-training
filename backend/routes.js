const express  =require('express');
const faker  =require('faker');
var employeeRouter = express.Router();

const mockData = require('./mock.employee');

employeeRouter.get('/employees',(req,res)=> {
    res.send(mockData);
});

employeeRouter.get('/employees/:id',(req,res)=> {

    const empID= parseInt(req.params['id']);

    const selectedEmployee = mockData.find((employee)=>{
        return employee.Id === empID;

    });
    if(selectedEmployee)
        res.send(selectedEmployee);
    else
        res.json('Not Found for ' + empID);
});

employeeRouter.post('/employees',(req,res)=> {
    console.log(req.body);
    const newEmployee = req.body;
    
    newEmployee.Id = faker.random.number(1000);
    newEmployee.PhotoUrl= faker.image.imageUrl();
    mockData.push(newEmployee);
    res.status(201).send(newEmployee);
    
});

module.exports = employeeRouter;
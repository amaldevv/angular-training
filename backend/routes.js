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

employeeRouter.put('/employees/:id/',(req,res)=>{
    const choosenEmployee = req.body;
    console.log(choosenEmployee);
    const selectedEmployeeIndex = mockData.findIndex((employee)=>{
        return employee.Id === choosenEmployee.Id;

    });
    console.log(selectedEmployeeIndex);
    mockData.splice(selectedEmployeeIndex,1,choosenEmployee);
    res.status(201).send(choosenEmployee);
});

module.exports = employeeRouter;
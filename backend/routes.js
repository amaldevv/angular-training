const express  =require('express');
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

module.exports = employeeRouter;
const express  =require('express');
var employeeRouter = express.Router();

const mockData = require('./mock.employee');

employeeRouter.get('/employees',(req,res)=> {
    res.send(mockData);
});

module.exports = employeeRouter;
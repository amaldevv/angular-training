const express  =require('express');
var employeeRouter = express.Router();

const mockData = require('./mock.employee');

employeeRouter.get('/',(req,res)=> {
    res.send(mockData);
});

module.exports = employeeRouter;
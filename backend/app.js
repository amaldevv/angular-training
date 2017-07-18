const express = require('express');

const app = express();

const routes = require('./routes');

app.use('/api/employees', routes);

app.listen(10255,(err)=>{
    if(err)
        {
            console.log("server error");
            process.exit(1);
        }
    console.log("Running on server, port #10255");
})
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


const routes = require('./routes');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json());


app.use('/api', routes);

app.listen(10255,(err)=>{
    if(err)
        {
            console.log("server error");
            process.exit(1);
        }
    console.log("Running on server, port #10255");
})
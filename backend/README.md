Create a `package.json` file using `npm init`

Then install expressjs, `--save option` will automatically add it to the dependencies section in the package.json file

`npm i express --save`

Install faker

`npm i faker --save`


Install nodemon (optional)

`npm i -g nodemon`

Run the application using

`node app.js` or
` nodemon app.js`

Create Dummy Data

## Step 1 :
Create a file named `mock.employee.js`
Add the following command to load the library
`const faker = require('faker');`

Create an array object for storing the details
`let contactList = []`

Populate the list using the following snippet
```
for(let i=0;i<10;i++)
    {
        let contactObj={
            Id:faker.random.number(5000),
            FirstName :faker.name.firstName(),
            LastName:faker.name.lastName()
           
        };
        contactList.push(contactObj);
    }
```
Return the list using

`module.exports = contactList; `

## Step 2 : 

Create a new file called `app.js`

Load the express module


`const express = require('express');`

Create an express application using the statement
`const app = express();`

`express()` is a top-level function exported by the module.

## Step 3 
Listen for connections

```
app.listen(10266, (err) =>{
    if(err)
        {
            console.log(err);
            process.exit(0);

        }
    console.log("Running on Port #10266");
});
```


## Step 4
Load  the mock data

`const contactsData = require('./mock.contacts');`

## Step 5
Create a GET method to list all the contacts

```
app.get("/api/contacts", (req,res)=>{
    res.send(contactsData);
});
```
## Step 6
Create a get method to list details of a contact

```
app.get('/api/contacts/:id',(reg,res)=>{
    const contactID= parseInt(req.params['id']);

    const selectedContact = contactsData.find((contact)=>{
        return contact.Id === contactID;

    });
    
    if(selectedContact)
        res.send(selectedContact);
    else
        res.json('Not Found for ' + contactID);

})
```

## Step 7 
Add a post method to save a new item

Load `faker` module

```
const faker  =require('faker');
```

Load `body-parser` module

```
const bodyParser = require('body-parser');
```

Configure express to parse incoming json using

```
app.use(bodyParser.json());
```

Create a post method
```
app.post('/api/contacts',(req,res)=>{
    const newContact = req.body;
    
    newContact.Id = faker.random.number(1000);
    contactData.push(newContact);

    res.status(201).send(contactsData);
});

```

## Step 8
Add a put method to update an existing item

```
app.put('/api/employee/:id',(req,res)=>{
    const choosenContact = req.body;
    
    const contactIndex = contactData.findIndex((contact)=>{
        return contact.Id === choosenContact.Id;

    });
   
    empData.splice(contactIndex,1,choosenContact);
    res.status(201).send(choosenContact);
});

```
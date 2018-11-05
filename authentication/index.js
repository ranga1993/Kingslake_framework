var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

//Constructing the express app
var app = express();

//Importing Routes
const route = require('./route/routes');

//Defining the Port Number
const PORT = 5000;

//Using Middleware
app.use(cors());
app.use(bodyparser.json());

//Routes Urls
app.use('/api', route);

app.get("/", function(req, res){
    res.json( {msg: "Hello Kingslake"} )
});

//Running the Server
app.listen(PORT, function(){
    console.log('Server started on port 5000')
});
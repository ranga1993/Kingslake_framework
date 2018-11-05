var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

//Constructing the express app
var app = express();

//Importing Routes
const route = require('./route/routes');
const mongoRoute = require('./route/mongoRoutes');

//Defining the Port Number
const PORT = 3000;

//Using Middleware
app.use(cors());

app.use(bodyparser.json());

//Routes Urls
app.use('/api', route);
app.use('/mongoapi', mongoRoute);


app.get('/', function(req, res){
    res.send("Hello Ranga");
});

//Running the Server
app.listen(PORT, function(){
    console.log("Server has been started at port no: " + PORT);
});
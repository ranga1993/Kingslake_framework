var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var portNumber = require('./dependencies');
var logger = require('./logger');

//Constructing the express app
var app = express();

//Importing Routes
const mongoAtlasRoute = require('./route/mongoAtlasRoutes');

//Using Middleware
app.use(cors());

app.use(bodyparser.json());

//Routes Urls
app.use('/mongoAtlasapi', mongoAtlasRoute);

//Running the Server
app.listen(portNumber.PORT, function(){
    logger.serverLog.info('Server has been started at port no: ' + portNumber.PORT);
});
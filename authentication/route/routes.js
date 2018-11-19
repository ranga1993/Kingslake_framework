var express = require('express');
var jwt = require('jsonwebtoken');
var mysql = require('mysql');
var router = express.Router();
var logger = require('../logger');

//Creating the mySQL Database connection
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

//Check the status of the connection
mysqlConnection.connect(function(err){
    if(!err){
        logger.mysqlConnectionLog.info('mySQL Connection is Successful');
    }
    else{
        logger.mysqlConnectionLog.error('mySQL Connection is failed');
    }
})

//Defining the secret key
var secretkey = 'kingslake';


// router.post('/posts', verifyToken, function(req, res){
//     jwt.verify(req.token, secretkey, function(err, authData){
//         if(err){
//             res.sendStatus(403);
//         }
//         else{
//             res.json({
//                 message: 'Post created',
//                 authData
//             });
//         }
//     });
// });

//Login function with creating the token
router.post('/login', function(req, res, next){
    mysqlConnection.query('SELECT * FROM user WHERE email=? AND password=?', [req.body.email, req.body.password], function(err, result){
        if(result.length != 0){
            var user = {
                email: req.body.email,
                password: req.body.password,
                serverType: req.body.serverType
            };
            jwt.sign({user}, secretkey, {expiresIn: '30s'}, function(err, token){
                res.json({
                    token: token,
                    serverType: user['serverType']
                });
            });
        }
        else{
            res.json({
                message: "Login Failed!"
            });
        }
    });
});


//Verifying Token
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader != 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }
}

module.exports = router;
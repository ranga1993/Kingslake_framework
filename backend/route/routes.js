var express = require('express');
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
});

//Get Employee Details
router.get('/get_employees', function(req, res, next){
    mysqlConnection.query('SELECT * FROM employee', function(err, rows, fields){
        if(!err){
            res.send(rows);
        }
        else{
            logger.mysqlErrorLog.error(err);
        }
    });
});

//Get a specific Employee Details
router.get('/get_employee/:id', function(req, res, next){
    mysqlConnection.query('SELECT * FROM employee WHERE id = ?', [req.params.id], function(err, rows, fields){
        if(!err){
            res.send(rows);
        }
        else{
            logger.mysqlErrorLog.error(err);
        }
    });
});

//Insert an Employee
router.post('/add_employee', function(req, res, next){
    var postData = req.body;
    mysqlConnection.query('INSERT INTO employee SET ?', postData, function(err, rows, fields){
        if(!err){
            res.end(JSON.stringify(rows));
        }
        else{
            logger.mysqlErrorLog.error(err);
        }
    });
});

//Update an Employee
router.put('/update_employee/:id', function(req, res, next){
    mysqlConnection.query('UPDATE employee SET name = ?, nic = ? WHERE id = ?', [req.body.name, req.body.nic, req.params.id], function(err, result){
        if(!err){
            res.json(result);
        }
        else{
            logger.mysqlErrorLog.error(err);
        }
    });
});

//Delete an Employee
router.delete('/delete_employee/:id', function(req, res, next){
    mysqlConnection.query('DELETE FROM employee WHERE id = ?', [req.params.id], function(err, result){
        if(!err){
            res.json(result);
        }
        else{
            logger.mysqlErrorLog.error(err);
        }
    });
});


module.exports = router;
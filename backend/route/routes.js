var express = require('express');
var mysql = require('mysql');
var router = express.Router();

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
        console.log("mySQL Connection is Successful");
    }
    else{
        console.log("mySQL Connection is failed");
    }
});

//Get Employee Details
router.get('/get_employees', function(req, res, next){
    // res.send('get route tested');
    mysqlConnection.query('SELECT * FROM employee', function(err, rows, fields){
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
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
            console.log(err);
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
            console.log(err);
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
            res.json(err);
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
            res.json(err);
        }
    });
});


module.exports = router;
var express = require('express');
var mongoose = require('mongoose');
var mongoAtlasRoute = express.Router();

//Importing employees model
const Employee = require('../model/employees');

var logger = require('../logger');

mongoose.connect('mongodb://admin:' + process.env.MONGO_ATLAS_PW + '@cluster0-shard-00-00-6jct7.mongodb.net:27017,cluster0-shard-00-01-6jct7.mongodb.net:27017,cluster0-shard-00-02-6jct7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });

//Get Employee Details
mongoAtlasRoute.get('/get_employees', function(req, res, next){
    // res.send('get route tested');
    Employee.find(function(err, employees){
        if(!err){
            res.json(employees);
        }
        else{
            logger.mongoDBErrorLog.error(err);
        }
    })
})

//Insert an Employee
mongoAtlasRoute.post('/add_employee', function(req, res, next){
    let newEmployee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nic: req.body.nic
    });
    newEmployee.save(function(err, employee){
        if(!err){
            res.json({msg: 'Employee has been added successfully'});
        }
        else{
            logger.mongoDBErrorLog.error(err);
        }
    });
})

//Update an Employee
mongoAtlasRoute.put('/update_employee/:_id', function(req, res, next){
    Employee.findOneAndUpdate({_id: req.params._id}, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nic: req.body.nic
        }
    }, function(err, result){
        if(!err){
            res.json(result);
        }
        else{
            logger.mongoDBErrorLog.error(err);
        }
    })
})

//Delete an Employee
mongoAtlasRoute.delete('/delete_employee/:_id', function(req, res, next){
    Employee.remove({_id: req.params._id}, function(err, result){
        if(!err){
            res.json(result);
        }
        else{
            logger.mongoDBErrorLog.error(err);
        }
    })
})

module.exports = mongoAtlasRoute;
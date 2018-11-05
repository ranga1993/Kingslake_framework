var express = require('express');
var mongoose = require('mongoose');
var mongoRoute = express.Router();

//Importing employees model
const Employee = require('../model/employees');

//Creating the mongoDB Connection
mongoose.connect('mongodb://localhost:27017/employees', function(err){
    if(!err){
        console.log('MongoDB connected at port 27017');
    }
    else{
        console.log('Connection failed');
    }
});

//Get Employee Details
mongoRoute.get('/get_employees', function(req, res, next){
    // res.send('get route tested');
    Employee.find(function(err, employees){
        if(!err){
            res.json(employees);
        }
        else{
            res.json(err);
        }
    })
})

//Insert an Employee
mongoRoute.post('/add_employee', function(req, res, next){
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
            res.json(err);
        }
    });
})

//Update an Employee
mongoRoute.put('/update_employee/:_id', function(req, res, next){
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
            res.json(err);
        }
    })
})

//Delete an Employee
mongoRoute.delete('/delete_employee/:_id', function(req, res, next){
    Employee.remove({_id: req.params._id}, function(err, result){
        if(!err){
            res.json(result);
        }
        else{
            res.json(err);
        }
    })
})

module.exports = mongoRoute;
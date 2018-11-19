const mongoose = require('mongoose');

//Defining mongoDB Employee Schema
const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    }
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);
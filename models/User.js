const mongoose = require('mongoose');
 const schema = new mongoose.Schema({
    name:String,
    email:String,
    employeeId:String,
    contact:String,
    password:String
 },{ autoCreate: false, autoIndex: false });

 const User = mongoose.model("users", schema);

module.exports = User;
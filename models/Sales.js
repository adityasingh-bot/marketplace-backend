const mongoose = require('mongoose');
 const schema = new mongoose.Schema({
    id:String,
    category:String,
    productName:String,
    price:String,
    description:String,
    seller:String,
    buyer:String
 },{ autoCreate: false, autoIndex: false });

 const Sales = mongoose.model("sales", schema);

module.exports = Sales;


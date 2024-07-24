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

 const Trade = mongoose.model("trades", schema);

module.exports = Trade;


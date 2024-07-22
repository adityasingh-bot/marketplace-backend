const mongoose = require('mongoose');
 const schema = new mongoose.Schema({
    category:String,
    productName:String,
    price:String,
    description:String,
    seller:String
 },{ autoCreate: false, autoIndex: false });

 const Product = mongoose.model("products", schema);

module.exports = Product;


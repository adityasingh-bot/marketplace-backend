const Product = require('../models/Product');

exports.registerProduct = async (req, res)=>{
    try{
        const {category, productName, price, description, seller} = req.body;
        const product = new Product({category, productName, price, description, seller});
        await product.save();
        res.status(201).json({response: product});        
    }catch(err){
        res.status(500).json({response: err})
    }
}

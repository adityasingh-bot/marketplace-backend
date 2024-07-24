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
exports.getProducts = async (req,res)=>{
    try{        
        const product = await Product.find();
        if(!product){
            return res.status(404).json({ response: 'product not found' });
        }
        res.status(200).json({response: product});
    }catch(err){
        res.status(500).json({response: err});
    }
}

exports.getProductById = async (req,res)=>{
    try{      
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({ response: 'Product not found' });
        }
        res.status(200).json({response: product});
    }catch(err){
        res.status(500).json({response: err});
    }
} 


exports.deleteProduct = async (req,res)=>{
    try{        
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({ response: 'Product not found' });
        }
        res.status(200).json({response: "Product Deleted Successfully"});
    }catch(err){
        res.status(500).json({response: err});
    }
} 
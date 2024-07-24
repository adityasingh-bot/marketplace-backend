const Purchase = require('../models/Purchase')

exports.purchaseRecord = async (req, res)=>{
    try{
        const {id, category, productName, price, description, seller, buyer} = req.body;
        const purchase = new Purchase({id, category, productName, price, description, seller, buyer});
        await purchase.save();
        res.status(201).json({response: purchase});        
    }catch(err){
        res.status(500).json({response: err})
    }
}
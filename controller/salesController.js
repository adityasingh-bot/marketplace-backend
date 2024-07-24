const Sales = require('../models/Sales')

exports.salesRecord = async (req, res)=>{
    try{
        const {id, category, productName, price, description, seller, buyer} = req.body;
        const sales = new Sales({id, category, productName, price, description, seller, buyer});
        await sales.save();
        res.status(201).json({response: sales});        
    }catch(err){
        res.status(500).json({response: err})
    }
}
const Trade = require('../models/Trade');

exports.tradeProduct = async (req, res)=>{
    try{
        const {id, category, productName, price, description, seller, buyer} = req.body;
        const trade = new Trade({id, category, productName, price, description, seller, buyer});
        await trade.save();
        res.status(201).json({response: trade});        
    }catch(err){
        res.status(500).json({response: err})
    }
}

exports.getTradeProducts = async (req,res)=>{
    try{        
        const trade = await Trade.find();
        if(!trade){
            return res.status(404).json({ response: 'trade product not found' });
        }
        res.status(200).json({response: trade});
    }catch(err){
        res.status(500).json({response: err});
    }
}

exports.getTradeProductById = async (req,res)=>{
    try{      
        const trade = await Trade.findById(req.params.id);
        console.log("Trade", trade)
        if(!trade){
            return res.status(404).json({ response: 'Product not found' });
        }
        res.status(200).json({response: trade});
    }catch(err){
        res.status(500).json({response: err});
    }
} 

exports.deleteTradeProduct = async (req,res)=>{
    try{        
        const trade = await Trade.findByIdAndDelete(req.params.id);
        if(!trade){
            return res.status(404).json({ response: 'Trade not found' });
        }
        res.status(200).json({response: "Trade Deleted Successfully"});
    }catch(err){
        res.status(500).json({response: err});
    }
} 
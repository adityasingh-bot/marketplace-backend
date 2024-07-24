const express = require('express');
const router = express.Router();
const tradeController = require('../controller/tradeController');


router.post('/tradeProduct', tradeController.tradeProduct);
router.get('/getAllTradeProduct', tradeController.getTradeProducts);
router.get('/getTradeProductById/:id', tradeController.getTradeProductById);
router.delete('/delete/:id', tradeController.deleteTradeProduct);

module.exports = router;
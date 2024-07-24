const express = require('express');
const router = express.Router();
const purchaseController = require('../controller/purchaseController');

router.post('/purchaseRecord', purchaseController.purchaseRecord);
router.get('/getAllPurchaseRecord', purchaseController.getPurchaseProducts)
module.exports = router;
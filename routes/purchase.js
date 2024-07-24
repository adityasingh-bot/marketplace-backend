const express = require('express');
const router = express.Router();
const purchaseController = require('../controller/purchaseController');

router.post('/purchaseRecord', purchaseController.purchaseRecord);

module.exports = router;
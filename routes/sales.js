const express = require('express');
const router = express.Router();
const salesController = require('../controller/salesController');

router.post('/salesRecord', salesController.salesRecord);
router.get('/getAllSalesRecord', salesController.getSalesProducts)

module.exports = router;
const express = require('express');
const router = express.Router();
const salesController = require('../controller/salesController');

router.post('/salesRecord', salesController.salesRecord);

module.exports = router;
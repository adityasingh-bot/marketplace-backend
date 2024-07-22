const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/register', productController.registerProduct);


module.exports = router;
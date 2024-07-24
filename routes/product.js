const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');


router.post('/register', productController.registerProduct);
router.get('/getAllProduct', productController.getProducts);
router.get('/getProduct/:id', productController.getProductById);
router.delete('/delete/:id', productController.deleteProduct);
module.exports = router;
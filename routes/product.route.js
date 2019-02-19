// PRODUCT

var express = require("express");
var router = express.Router();
var productController = require('../controller/productController.js');

router.get("/",productController.productGET);

module.exports = router;
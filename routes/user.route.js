var express = require('express');
var router = express.Router();
var userController = require('../controller/userController.js');

db = require("../db.js");


router.get("/",userController.index);

router.get("/create",userController.createGET);

router.post("/create",userController.createPOST);

router.get("/:id",userController.view);


module.exports = router;
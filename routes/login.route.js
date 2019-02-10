//login
//create loginController
var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');

router.get("/",loginController.loginGET);
router.post("/",loginController.loginPOST);


module.exports = router;
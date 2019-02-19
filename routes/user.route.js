var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: './public/imageUploadByUser' });

var router = express.Router();
var userController = require('../controller/userController.js');
var userValidate = require('../validate/user.validate.js');

db = require("../db.js");


router.get("/",userController.index);

router.get("/create",userController.createGET);

router.post("/create",upload.single('avatar'),userValidate.validateInput,userController.createPOST);

router.get("/:id",userController.view);


module.exports = router;
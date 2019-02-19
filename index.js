require('dotenv').config();

var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var port = 9999;
var db = require("./db.js");
var cookieParser = require('cookie-parser');

var userRouter = require("./routes/user.route.js");
var loginRouter = require("./routes/login.route.js");
var productRouter = require("./routes/product.route.js");
var auth = require("./auth/auth.js");

var listOfUsers = db.get("user").value();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.static('public'));
app.use("/user",auth.authLogin,userRouter);
app.use("/product",auth.authLogin,productRouter);
app.use("/login",loginRouter);

app.set("view engine","pug");
app.set("views","./views");

app.get("/",function(req, res){
    res.send("<a href='/login' style='background-color:gray;color:white;border-radius:10px;cursor:pointer;text-decoration:none;padding:10px;'>Click here to login</a>");
});
app.get("/index",auth.authLogin,function(req, res){
    res.render("./index.pug");
});


app.listen(port,()=>console.log("server listening on "+port));

function loadNewestData(){
    listOfUsers = db.get("user").value();
}


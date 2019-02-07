var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var port = 9999;
var db = require("./db.js");

var userRouter = require("./routes/user.route.js");

var listOfUsers = db.get("user").value();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.set("view engine","pug");
app.set("views","./views");

app.get("/",function(req, res){
    res.send("<a href='/user' style='background-color:gray;color:white;border-radius:10px;cursor:pointer;text-decoration:none;padding:10px;'>To user page</a>");
});

app.use("/user",userRouter);

app.listen(port,()=>console.log("server listening on "+port));

function loadNewestData(){
    listOfUsers = db.get("user").value();
}
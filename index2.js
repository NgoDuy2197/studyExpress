var express =require("express");
var app = express();

app.use("view engine","pug");
app.use("views","./views");


app.get("/",(req,res)=>{
	res.send("ok");
});

app.listen(9999,function(){
	console.log("listen on 9999");
});

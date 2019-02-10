module.exports.authLogin = function(req,res,next){
	if(req.cookies){
		if(req.cookies.userLogined){
			next();
		}
	}
	res.render("./login/index");
	return;
}
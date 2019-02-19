module.exports.authLogin = function(req,res,next){
	if(req.signedCookies){
		if(req.signedCookies.userLogined){
			next();
			return;
		}
	}
	// res.render("./login/index");
	res.redirect('/login');
	return;
}
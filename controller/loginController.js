var db = require('../db.js');

module.exports.loginGET = function(req,res){
	res.render('./login/index.pug');
}

module.exports.loginPOST = function(req,res){
	var dataFromUser = req.body;
	var err = [];
	if(!dataFromUser.username){
		err.push('Username is null');
	}
	if(!dataFromUser.password){
		err.push('Password is null');
	}

	var user = db.get("user").find({username: dataFromUser.username}).value();
	if(user){
		//Check pass
		if(user.password == dataFromUser.password){
			res.cookie('userLogined',dataFromUser.username);
			res.render('./index');
		}else{
			if(dataFromUser.password != ""){
				console.log(dataFromUser.password != "");
				err.push('Password is wrong');
			}
		}
	}else{
		err.push('Username is not exist');
	}

	if(err.length > 0){
		res.render('./login/index.pug',{error: err,dataUserInput: dataFromUser});
		return;
	}

}
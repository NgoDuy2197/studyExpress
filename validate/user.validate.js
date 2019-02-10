module.exports.validateInput = function(req,res,next){
    var contentRequest = req.body;
    idNew = db.get("user").value().length+1;
    contentRequest.id = idNew;
    var err = [];

    if(contentRequest.name == ""){
        err.push("Name is null");
    }
    if(contentRequest.address == ""){
        err.push("Address is null");
    }

    if(err.length > 0){
        res.render("user/create",{error: err,userInput: contentRequest});
        return;
    }

    next();
}
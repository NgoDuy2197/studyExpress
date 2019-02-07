module.exports.index = function(req,res){
    listOfUsers = db.get("user").value();
    var searchKey = req.query.q;
    var listUserMeetRequirement = null;
    if(searchKey != null){
        listUserMeetRequirement = listOfUsers.filter(function(data){
            if(data.name.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1){
                return data;
            }
        });
    }else{
        listUserMeetRequirement = listOfUsers;
    }
    res.render("./user/search",{listOfUsers: listUserMeetRequirement});
};

module.exports.createGET = function(req,res){
    listOfUsers = db.get("user").value();
    res.render("./user/create",{
        idNew: listOfUsers.length+1
    });
};

module.exports.createPOST = function(req,res){
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

    var userToAdd = {
      "id": idNew,
      "name": contentRequest.name,
      "address": contentRequest.address
    };
    db.get("user").push(userToAdd).write();
    res.redirect("/user");
};

module.exports.view = function(req,res){
    listOfUsers = db.get("user").value();
    var inforToFind = {
        id:req.params.id
    };
    var user = null;
    for(item of listOfUsers){
        if(item.id == inforToFind.id){
            user = item;
            break;
        }
    }
    res.render("./user/view",{
        userInfo:user
    });
};
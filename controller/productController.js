var db = require('../db.js');

module.exports.productGET = function(req,res){
    var products = db.get('products').value();
    var page = parseInt(req.query.page) || 1;
    var itemPerPage = 3;
    var start = (page - 1) * itemPerPage;
    var end = page * itemPerPage;
    var maxPage = Math.ceil(products.length / itemPerPage);
    var pagination = {
        current: page,
        next: (page+1)<maxPage?(page+1):maxPage,
        pre: (page-1)>0?(page-1):1,
        last: maxPage,
        first: 1
    }
    products = products.slice(start,end);
    res.render('./product/index',{
        products: products,
        pagination: pagination
    });
}
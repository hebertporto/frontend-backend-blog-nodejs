var Novels   = require('./../entity/novels');
var path = require('path');

var Service = function(req, res, next) {
	var find = {};

 if(req.params.id){
	 find = Novels.findById(req.params.id).exec();
 }

 if(!req.params.id){
	 find = Novels.find({}).exec();
 }

 find
	 .then(function(result){
			 if(!result){
				 return res.status(404)
							 .json({
								 status : false,
								 data   : {}
							 });
			 }

			 result.map(function (item) {
						 return item.img_url = req.protocol + '://' + req.get('host') + '/public/uploads/' + item.img_url;
			 });
			 return res.status(200)
						 .json({
								status : true,
								data   : result
						 });
	 })
	 .catch(function(err){
		 console.log("err",err);
			return res.status(500)
						.json({
							 status : false,
							 data   : {}
						})
	 });
}

module.exports = Service;
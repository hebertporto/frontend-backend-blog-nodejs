var Novel = require('./../entity/novels');

var Service = function(req, res, next) {
	console.log('req', req.body);
	
	var novel = new Novel(req.body);
		 novel
			 .save()
			 .then(function(result){
				 if(!result){
					 return res.status(404)
										.json({
											 status : false,
											 data   : {}
										});
				 }
				 return res.status(200)
							 .json({
								 status : true,
								 data   : result
							 });
			 })
			 .catch(function (err){
				 console.log("err", err);
				 return res.status(500)
							 .json({
								 status : false,
								 data   : {}
							 });
			 });
}

module.exports = Service;
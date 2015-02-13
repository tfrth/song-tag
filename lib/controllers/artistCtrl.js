var artistService = require('./../services/artistService');



module.exports.post = function(req, res){
	artistService.save(req.body)                                //req.body is just artist info sending in to save (post)
		.then(function(response){
			res.status(200).json(response);
		}, function(err){
			res.status(400).json(err)
		})
};
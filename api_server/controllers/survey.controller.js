const Survey = require('../models/survey.model');
var mongoose = require('mongoose');

exports.addSurvey = function (req, res,next) {
		let response;

		survey = new Survey(
			{
				name		: req.body.name,
				createdAt	:Date.now(),
				questions	: req.body.questions
			}
		);
		survey.save(function (err,result) {
		if (err) {
			response = { status: false, message: err.message};
			res.json(response);
			//return next(err);
		}else{
		if(result._id){
		response = { status: true, statuscode : 1, message: "Survey Created successfully"};
		response.id= result._id; 
		res.json(response);
		}else{
		
			response = { status: false, message: 'Got error'};
			res.json(response);
		}
	}
	});
		
};
exports.updateSurvey = function (req, res,next) {
	let response;
	Survey.findOne({ "_id": mongoose.Types.ObjectId(req.body.id)}, function(err, survey) {
			
		if(!err) {
			if(survey) {
				survey.name		= req.body.name;
				survey.updatedAt=Date.now();
				survey.questions=req.body.questions;
				response = { status: true, message: "survey updated successfully" };
				survey.save(function (err,result) {
					if (err) {
						response = { status: false, message: err.message};
						res.json(response);
						//return next(err);
					}else{
						response.id= result._id; 
						res.json(response);
					}
				});
			}else{

				response = { status: true,statuscode : 1, message: "Survey Not exist"};
			}
			res.json(response);
		}else{
			response = { status: false, message: err.message};
			res.json(response);
		}
});
}
const Survey = require('../models/survey.model');
var mongoose = require('mongoose');

exports.addSurvey = function (req, res,next) {
		let response;

		survey = new Survey(
			{
				name		: req.body.name,
				cid			: req.body.cid,
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
				console.log(survey);
				survey.name		= req.body.name;
				survey.updatedAt=Date.now();
				survey.questions=req.body.questions;
				
				survey.save(function (err,result) {
					if (err) {
						response = { status: false, message: err.message};
						res.json(response);
						return next(err);
					}else{
						response = { status: true, message: "survey updated successfully" };
						response.id= result._id; 
						res.json(response);
					}
				});
			}else{

				response = { status: true,statuscode : 1, message: "Survey Not exist"};
				res.json(response);
			}
		}else{
			response = { status: false, message: err.message};
			res.json(response);
		}
});
}

exports.survey_details = function (req, res,next) {
    Survey.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};
exports.surveys_details = function (req, res,next) {
    Survey.find({cid : req.body.cid }, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
};

exports.survey_delete = function (req, res,next) {
	Survey.remove( {"_id": mongoose.Types.ObjectId(req.body.id)},function (err) {
        if (err) return next(err);
        res.send('successfully removed user');
    })
};
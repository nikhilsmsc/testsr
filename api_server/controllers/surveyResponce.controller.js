const SurveyRes = require('../models/surveyResponce.model');
var mongoose = require('mongoose');

exports.addSurvey = function (req, res,next) {
		let response;

		survey = new SurveyRes(
			{
				name		: req.body.name,
				sid 		: req.body.sid,
				bid 		: req.body.bid,
				cid			: req.body.cid,
				createdAt	:Date.now(),
				answers	: 	req.body.answers
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


exports.survey_details = function (req, res,next) {
    SurveyRes.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};
exports.surveys_details = function (req, res,next) {
    SurveyRes.find({cid : req.body.cid }, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
};

exports.survey_delete = function (req, res,next) {
	SurveyRes.remove( {"_id": mongoose.Types.ObjectId(req.body.id)},function (err) {
        if (err) return next(err);
        res.send('successfully removed user');
    })
};
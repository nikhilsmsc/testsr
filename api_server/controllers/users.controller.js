const Users = require('../models/users.model');
var mongoose = require('mongoose')
//usersSchema = mongoose.model('users'),

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.SignUp = function (req, res,next) {
		let response;
		Users.findOne({emailid: req.body.emailid}, function(err, user) {
			if(!err) {
				if(user) {
						response = { status: true, statuscode : 0, message: "User already exist with this Email" };
						res.json(response);
				}else{
	
					user = new Users(
						{
							name		: req.body.name,
							emailid		: req.body.emailid,
							number		: req.body.number,
							password	: req.body.pass,
							status		:1,
							createdAt	:Date.now()
						}
					);
					user.save(function (err,result) {
					if (err) {
						response = { status: false, message: err.message};
						res.json(response);
						//return next(err);
					}
					if(result._id){
					response = { status: true, statuscode : 1, message: "User Created successfully"};
					response.id= result._id; 
					res.json(response);
					}else{
						response = { status: false, message: 'Got error'};
						res.json(response);
					}
				});
					
				}
				
			}
	});
		
};
exports.Login = function (req, res,next) {
		let response;
		Users.findOne({emailid: req.body.emailid}, function(err, user) {
			
			if(!err) {
				if(user) {
						if(user.password == req.body.pass){
							response = { status: true, message: "Login successfully" };

						}else{
							response = { status: true, statuscode : 0 , message: "password Incorrect" };
						}
				}else{
	
					response = { status: true,statuscode : 1, message: "User Not exist"};
				}
				res.json(response);
			}else{
				response = { status: false, message: err.message};
				res.json(response);
			}
	});
		
};
exports.user_details = function (req, res,next) {
    Users.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};
exports.users_details = function (req, res,next) {
    Users.find({}, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
};
exports.users_details_exceptone = function (req, res,next) {
    Users.find({ _id: { $nin: [mongoose.Types.ObjectId(req.body.id)] } }, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
};
exports.user_delete = function (req, res,next) {
	Users.remove( {"_id": mongoose.Types.ObjectId(req.body.id)},function (err) {
        if (err) return next(err);
        res.send('successfully removed user');
    })
};
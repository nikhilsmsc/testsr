const Users = require('../models/users.model');
var mongoose = require('mongoose')
//usersSchema = mongoose.model('users'),

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.user_create = function (req, res,next) {
		let response;
		Users.findOne({number: req.body.number}, function(err, user) {
			if(!err) {
				if(user) {
		
						user.name			=req.body.name;
						user.emailid		= req.body.emailid;
						user.number			= req.body.number;
						user.devicetoken	= req.body.devicetoken;
						user.ostype			= req.body.ostype;
						user.deviceuid		= req.body.deviceuid;
						user.status			=1;
						user.updatedAt		=Date.now();
						response = { status: true, message: "User already exist updated successfully" };
				}else{
	
					user = new Users(
						{
							name		: req.body.name,
							emailid		: req.body.emailid,
							number		: req.body.number,
							devicetoken	: req.body.devicetoken,
							ostype		: req.body.ostype,
							deviceuid	: req.body.deviceuid,
							status		:1,
							createdAt	:Date.now()
						}
					);
					response = { status: true, message: "User Created successfully"};
				}
				user.save(function (err,result) {
					if (err) {
						response = { status: false, message: err.message};
						res.json(response);
						//return next(err);
					}
					response.id= result._id; 
					res.json(response);
				});
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
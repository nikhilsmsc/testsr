const Cusers = require('../models/cusers.model');
var mongoose = require('mongoose');


exports.user_create = function (req, res,next) {
    let response;
    Cusers.findOne({number: req.body.number , uid : req.body.uid}, function(err, cuser) {
        if(!err) {
            if(cuser) {
    
                    cuser.name			=req.body.name;
                    cuser.updatedAt		=Date.now();
                    cuser.count         =cuser.count+1;
                    response = { status: true, message: "User already exist updated successfully" };
            }else{

                cuser = new Cusers(
                    {
                        uid         : req.body.uid,
                        name		: req.body.name,
                        number      : req.body.number,
                        createdAt	:Date.now(),
                        count       : 1
                    }
                );
                response = { status: true, message: "User Created successfully"};
            }
            cuser.save(function (err,result) {
                if (err) {
                    response = { status: false, message: err.message};
                    res.json(response);
                    //return next(err);
                }
                response.id= result._id;
                response.count= result.count;
                res.json(response);
            });
        }
});
    
};

exports.users = function (req, res,next) {
    Cusers.find({uid : req.body.uid }, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
};
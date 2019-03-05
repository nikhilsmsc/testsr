const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Options=new Schema({
	option 	: {type : String }
},{ _id : false });
let Questions= new Schema({
	qtype		: {type : String },
	question 	: {type : String },
	options		: [Options] 
}, { _id : false });
let SurveySchema = new Schema({
    name		: {type: String, required: true},
	cid			: {type: String, required: true},
	createdAt	: {type: Date},
	updatedAt	: {type:Date},
	questions	: [Questions]
});


// Export the model
module.exports = mongoose.model('Survey', SurveySchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Options=new Schema({
	option 	: {type : String }
});
let Questions= new Schema({
	qtype		: {type : String },
	question 	: {type : String },
	options		: [Options] 
});
let SurveySchema = new Schema({
    name		: {type: String, required: true},
	cid			: {type: String, required: true},
	createdAt	: {type: Date},
	updatedAt	: {type:Date},
	questions	: [Questions]
});


// Export the model
module.exports = mongoose.model('Survey', SurveySchema);
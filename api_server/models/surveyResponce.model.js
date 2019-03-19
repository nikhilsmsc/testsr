const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Answers= new Schema({
	question 	: {type : String },
	answer		: {type: String} 
}, { _id : false });
let SurveyResSchema = new Schema({
	name		: {type: String, required: true},
	sid			: {type: String, required: true},
	cid			: {type: String, required: true},
	bid			: {type: String, required: true},
	createdAt	: {type: Date},
	answers		: [Answers]
});


// Export the model
module.exports = mongoose.model('SurveyResponce', SurveyResSchema);